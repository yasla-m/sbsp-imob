import { Invoice } from "@/data/invoices";
import { PaymentModal } from "./PaymentModal";

interface PaymentFlowProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  invoices: Invoice[];
  onCheckout: (selectedInvoices: Invoice[]) => void;
}

export function PaymentFlow({ open, onOpenChange, invoices, onCheckout }: PaymentFlowProps) {
  const handleContinue = (selectedInvoices: Invoice[]) => {
    onCheckout(selectedInvoices);
  };

  return (
    <PaymentModal
      open={open}
      onOpenChange={onOpenChange}
      invoices={invoices}
      onContinue={handleContinue}
    />
  );
}
