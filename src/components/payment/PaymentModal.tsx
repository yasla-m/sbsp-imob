import { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Invoice } from "@/data/invoices";
import { parse } from "date-fns";

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  invoices: Invoice[];
  onContinue: (selectedInvoices: Invoice[]) => void;
}

export function PaymentModal({
  open,
  onOpenChange,
  invoices,
  onContinue,
}: PaymentModalProps) {
  // Sort invoices by due date (oldest first)
  const sortByDueDateOldestFirst = (invoiceList: Invoice[]) => {
    return [...invoiceList].sort((a, b) => {
      const dateA = parse(a.dueDate, "dd/MM/yyyy", new Date());
      const dateB = parse(b.dueDate, "dd/MM/yyyy", new Date());
      return dateA.getTime() - dateB.getTime();
    });
  };

  const openInvoices = useMemo(
    () => sortByDueDateOldestFirst(invoices.filter((inv) => inv.status === "open")),
    [invoices]
  );
  const overdueInvoices = useMemo(
    () => sortByDueDateOldestFirst(invoices.filter((inv) => inv.status === "overdue")),
    [invoices]
  );

  const [selectedOpenIds, setSelectedOpenIds] = useState<Set<string>>(
    new Set(openInvoices.map((inv) => inv.id))
  );

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const toggleOpenInvoice = (id: string) => {
    setSelectedOpenIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const selectedInvoices = useMemo(() => {
    const selectedOpen = openInvoices.filter((inv) =>
      selectedOpenIds.has(inv.id)
    );
    return [...overdueInvoices, ...selectedOpen];
  }, [openInvoices, overdueInvoices, selectedOpenIds]);

  const totalAmount = useMemo(() => {
    return selectedInvoices.reduce((sum, inv) => sum + inv.amount, 0);
  }, [selectedInvoices]);

  const handleContinue = () => {
    onContinue(selectedInvoices);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[540px] p-6 gap-0 flex flex-col max-h-[calc(100vh-4rem)]">
        <DialogHeader className="space-y-2 pb-6 flex-shrink-0">
          <DialogTitle className="text-xl font-semibold">
            Regularize as contas pendentes
          </DialogTitle>
          <p className="text-muted-foreground text-sm">
            Para seguir com o pagamento, é necessário incluir todas as faturas
            em atraso.
          </p>
        </DialogHeader>

        <div className="space-y-6 overflow-y-auto flex-1 min-h-0">
          {/* Em aberto section - shown first */}
          {openInvoices.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="status-badge status-pending">
                  <span className="w-2 h-2 rounded-full bg-pending" />
                  Em aberto
                </span>
                <span className="text-sm text-muted-foreground">
                  {openInvoices.length} fatura{openInvoices.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="border rounded-lg divide-y">
                {openInvoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="flex items-center justify-between p-4"
                  >
                    <div>
                      <p className="font-medium">
                        {invoice.month}, {invoice.year} ·{" "}
                        <span className="font-bold">
                          {formatCurrency(invoice.amount)}
                        </span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Vencimento: {invoice.dueDate}
                      </p>
                    </div>
                    <Checkbox
                      checked={selectedOpenIds.has(invoice.id)}
                      onCheckedChange={() => toggleOpenInvoice(invoice.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Em atraso section - shown second */}
          {overdueInvoices.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="status-badge status-overdue">
                  <span className="w-2 h-2 rounded-full bg-[hsl(var(--overdue))]" />
                  Em atraso
                </span>
                <span className="text-sm text-muted-foreground">
                  {overdueInvoices.length} fatura{overdueInvoices.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="border rounded-lg divide-y">
                {overdueInvoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="flex items-center justify-between p-4"
                  >
                    <div>
                      <p className="font-medium">
                        {invoice.month}, {invoice.year} ·{" "}
                        <span className="font-bold">
                          {formatCurrency(invoice.amount)}
                        </span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Vencimento: {invoice.dueDate}
                      </p>
                    </div>
                    <Checkbox
                      checked={true}
                      disabled
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-6 mt-6 border-t flex-shrink-0">
          <div>
            <p className="text-sm text-muted-foreground">Valor total</p>
            <p className="text-2xl font-bold">{formatCurrency(totalAmount)}</p>
          </div>
          <Button
            onClick={handleContinue}
            disabled={selectedInvoices.length === 0}
            className="px-8"
          >
            Continuar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}