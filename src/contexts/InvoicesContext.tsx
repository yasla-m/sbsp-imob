import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Invoice, invoicesData as initialInvoicesData } from '@/data/invoices';
import { parse, startOfDay } from 'date-fns';
import { getDemoToday } from '@/lib/demo-date';

interface InvoicesContextType {
  invoices: Invoice[];
  markInvoicesAsPaid: (invoiceIds: string[]) => void;
  getInvoicesByAddress: (addressId: string) => Invoice[];
  getInvoicesByAddressIds: (addressIds: string[]) => Invoice[];
  getInvoicesByCompany: (propertyIds: string[]) => Invoice[];
  getInvoiceUtils: (invoices: Invoice[]) => {
    overdueInvoices: Invoice[];
    openInvoices: Invoice[];
    pendingInvoices: Invoice[];
    pendingTotal: number;
    hasOverdue: boolean;
  };
}

const InvoicesContext = createContext<InvoicesContextType | undefined>(undefined);

// Calculate dynamic status based on due date
const calculateDynamicStatus = (invoice: Invoice): Invoice['status'] => {
  // If already paid, keep as paid
  if (invoice.status === 'paid') return 'paid';
  
  // Parse due date and compare with today
  const dueDate = parse(invoice.dueDate, "dd/MM/yyyy", new Date());
  const today = startOfDay(getDemoToday());
  
  // If due date has passed, it's overdue
  if (dueDate < today) return 'overdue';
  
  // Otherwise, it's open
  return 'open';
};

// Apply dynamic status to invoices
const applyDynamicStatus = (invoices: Invoice[]): Invoice[] => {
  return invoices.map(inv => ({
    ...inv,
    status: calculateDynamicStatus(inv)
  }));
};

export function InvoicesProvider({ children }: { children: ReactNode }) {
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoicesData);

  const markInvoicesAsPaid = useCallback((invoiceIds: string[]) => {
    setInvoices(prev => 
      prev.map(inv => 
        invoiceIds.includes(inv.id) 
          ? { ...inv, status: 'paid' as const }
          : inv
      )
    );
  }, []);

  const getInvoicesByAddress = useCallback((addressId: string): Invoice[] => {
    const filtered = invoices.filter(inv => inv.addressId === addressId);
    return applyDynamicStatus(filtered);
  }, [invoices]);

  const getInvoicesByAddressIds = useCallback((addressIds: string[]): Invoice[] => {
    const filtered = invoices.filter(inv => addressIds.includes(inv.addressId));
    return applyDynamicStatus(filtered);
  }, [invoices]);

  const getInvoicesByCompany = useCallback((propertyIds: string[]): Invoice[] => {
    const filtered = invoices.filter(inv => propertyIds.includes(inv.addressId));
    return applyDynamicStatus(filtered);
  }, [invoices]);

  const getInvoiceUtils = useCallback((invList: Invoice[]) => {
    // Apply dynamic status to ensure correct categorization
    const dynamicInvoices = applyDynamicStatus(invList);
    
    const overdueInvoices = dynamicInvoices.filter(inv => inv.status === "overdue");
    const openInvoices = dynamicInvoices.filter(inv => inv.status === "open");
    const pendingInvoices = dynamicInvoices.filter(inv => inv.status === "open" || inv.status === "overdue");
    const pendingTotal = pendingInvoices.reduce((sum, inv) => sum + inv.amount, 0);
    const hasOverdue = overdueInvoices.length > 0;
    
    return {
      overdueInvoices,
      openInvoices,
      pendingInvoices,
      pendingTotal,
      hasOverdue,
    };
  }, []);

  return (
    <InvoicesContext.Provider value={{ invoices, markInvoicesAsPaid, getInvoicesByAddress, getInvoicesByAddressIds, getInvoicesByCompany, getInvoiceUtils }}>
      {children}
    </InvoicesContext.Provider>
  );
}

export function useInvoices() {
  const context = useContext(InvoicesContext);
  if (!context) {
    throw new Error('useInvoices must be used within an InvoicesProvider');
  }
  return context;
}
