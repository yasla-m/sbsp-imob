import { useState, useEffect } from "react";
import { Invoice } from "@/data/invoices";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, FileCheck, Check } from "lucide-react";

interface PaymentSuccessScreenProps {
  invoices: Invoice[];
  paymentMethod: string;
  onClose: () => void;
}

const PLATFORM_FEE = 17.06;

export function PaymentSuccessScreen({
  invoices,
  paymentMethod,
  onClose,
}: PaymentSuccessScreenProps) {
  const [expandedSummary, setExpandedSummary] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const invoicesTotal = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const totalAmount = invoicesTotal + PLATFORM_FEE;
  const installmentAmount = totalAmount / 4;

  const getPaymentMethodLabel = () => {
    switch (paymentMethod) {
      case "credit_card":
        return "Mastercard •••• 5678";
      case "boleto":
        return "Boleto bancário";
      case "pix":
        return "Pix";
      default:
        return paymentMethod;
    }
  };

  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleDateString("pt-BR");
  };

  return (
    <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center justify-center min-h-[60vh]">
      <div
        className={`text-center space-y-6 transition-all duration-700 ${
          showContent
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        {/* Success animation */}
        <div className="relative w-32 h-32 mx-auto">
          {/* Document icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <FileCheck className="w-20 h-20 text-muted-foreground/30" />
              {/* Check badge */}
              <div
                className={`absolute -top-2 -right-2 w-10 h-10 bg-[hsl(var(--paid))] rounded-full flex items-center justify-center shadow-lg transition-all duration-500 delay-300 ${
                  showContent ? "scale-100" : "scale-0"
                }`}
              >
                <Check className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold">Pagamento realizado!</h1>

        {/* Summary card */}
        <div className="w-full min-w-[380px] max-w-md mx-auto bg-muted/30 rounded-2xl overflow-hidden">
          {/* Expandable invoices list */}
          <button
            onClick={() => setExpandedSummary(!expandedSummary)}
            className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
          >
            <span className="font-medium">
              {invoices.length} fatura{invoices.length !== 1 ? "s" : ""}
            </span>
            <div className="flex items-center gap-2">
              <span className="font-semibold">
                {formatCurrency(invoicesTotal)}
              </span>
              {expandedSummary ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </div>
          </button>

          {expandedSummary && (
            <div className="border-t divide-y bg-muted/30">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="p-4 text-sm">
                  <div className="flex justify-between">
                    <span>Fatura de {invoice.month}, {invoice.year}</span>
                    <span className="font-medium">
                      {formatCurrency(invoice.amount)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Payment details */}
          <div className="border-t p-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Método</span>
              <span className="font-medium">{getPaymentMethodLabel()}</span>
            </div>
            {paymentMethod === "credit_card" && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Parcelamento</span>
                <span className="font-medium">
                  4x de {formatCurrency(installmentAmount)}
                </span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Serviços da plataforma
              </span>
              <span className="font-medium">
                {formatCurrency(PLATFORM_FEE)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Data</span>
              <span className="font-medium">{getCurrentDate()}</span>
            </div>
          </div>

          {/* Total */}
          <div className="border-t p-4">
            <div className="flex justify-between items-baseline">
              <span className="text-muted-foreground">Valor total</span>
              <span className="text-2xl font-bold">
                {formatCurrency(totalAmount)}
              </span>
            </div>
          </div>
        </div>

        {/* Action button */}
        <Button onClick={onClose} className="px-8">
          Voltar para Faturas
        </Button>
      </div>
    </div>
  );
}
