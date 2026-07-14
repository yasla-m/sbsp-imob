import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";
import { parse } from "date-fns";
import type { Invoice } from "@/data/invoices";

interface InvoicesListProps {
  invoices: Invoice[];
}

export function InvoicesList({ invoices }: InvoicesListProps) {
  const navigate = useNavigate();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const getStatusLabel = (status: Invoice['status']) => {
    switch (status) {
      case 'open': return 'Em aberto';
      case 'paid': return 'Paga';
      case 'overdue': return 'Em atraso';
    }
  };

  const getStatusClass = (status: Invoice['status']) => {
    switch (status) {
      case 'open': return 'status-pending';
      case 'paid': return 'status-paid';
      case 'overdue': return 'status-overdue';
    }
  };

  const getStatusDotClass = (status: Invoice['status']) => {
    switch (status) {
      case 'open': return 'bg-pending';
      case 'paid': return 'bg-paid';
      case 'overdue': return 'bg-destructive';
    }
  };

  const getDueDateLabel = (status: Invoice['status']) => {
    switch (status) {
      case 'open': return 'Vence em';
      case 'paid': return 'Venceu em';
      case 'overdue': return 'Venceu em';
    }
  };

  // Sort invoices by most recent month first
  const sortedInvoices = useMemo(() => {
    const parseDate = (dateStr: string) => parse(dateStr, "dd/MM/yyyy", new Date());
    
    return [...invoices].sort((a, b) => {
      const dateA = parseDate(a.dueDate);
      const dateB = parseDate(b.dueDate);
      // Most recent first
      return dateB.getTime() - dateA.getTime();
    });
  }, [invoices]);

  const isEmpty = invoices.length === 0;

  return (
    <div className="bg-card rounded-xl p-6 border border-border animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Últimas faturas</h3>
        {!isEmpty && (
          <button 
            onClick={() => navigate('/faturas')}
            className="text-sm text-primary font-medium hover:underline"
          >
            Ver todas
          </button>
        )}
      </div>

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-muted-foreground" />
          </div>
          <p className="font-medium text-foreground mb-1">Nenhuma fatura por aqui</p>
          <p className="text-sm text-muted-foreground">
            Assim que as faturas fecharem, elas serão exibidas aqui.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedInvoices.slice(0, 3).map((invoice, index) => (
            <div 
              key={invoice.id} 
              style={{ animationDelay: `${index * 100}ms` }} 
              className="flex items-center justify-between py-3 border-b border-border last:border-0 border-none"
            >
              <div>
                <p className="font-medium text-foreground">
                  {invoice.month}, {invoice.year}
                </p>
                <p className="text-sm text-muted-foreground">
                  {getDueDateLabel(invoice.status)} {invoice.dueDate}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className={cn("status-badge", getStatusClass(invoice.status))}>
                  <span className={cn("w-2 h-2 rounded-full", getStatusDotClass(invoice.status))} />
                  {getStatusLabel(invoice.status)}
                </span>
                <span className="font-semibold text-foreground min-w-[100px] text-right">
                  {formatCurrency(invoice.amount)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}