import { useState } from "react";
import { Invoice } from "@/data/invoices";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, CreditCard, Barcode, QrCode, Info, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckoutScreenProps {
  invoices: Invoice[];
  onBack: () => void;
  onPaymentSuccess: (paymentMethod: string) => void;
}

type PaymentMethod = "credit_card" | "boleto" | "pix";

const PLATFORM_FEE = 17.06;

export function CheckoutScreen({
  invoices,
  onBack,
  onPaymentSuccess,
}: CheckoutScreenProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("credit_card");
  const [isLoading, setIsLoading] = useState(false);
  const [expandedSummary, setExpandedSummary] = useState(true);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const invoicesTotal = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const totalAmount = invoicesTotal + PLATFORM_FEE;

  const handlePayment = async () => {
    setIsLoading(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    onPaymentSuccess(selectedMethod);
  };

  const paymentMethods = [
    {
      id: "credit_card" as PaymentMethod,
      label: "Cartão de crédito",
      icon: CreditCard,
      description: "Parcelamento em até 12x",
    },
    {
      id: "boleto" as PaymentMethod,
      label: "Boleto bancário",
      icon: Barcode,
      description: "Vencimento em 3 dias úteis",
    },
    {
      id: "pix" as PaymentMethod,
      label: "Pix",
      icon: QrCode,
      description: "Aprovação imediata",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto w-full">
      {/* Header */}
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4 -ml-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <h1 className="text-3xl font-bold text-foreground mb-2">Escolha como pagar</h1>
        <p className="text-muted-foreground">
          Selecione a forma de pagamento e confirme o pagamento.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side - Payment options */}
        <div className="flex-1">
          <div className="bg-card rounded-2xl border p-6">
            <h2 className="text-lg font-semibold mb-6">Forma de pagamento</h2>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left",
                    selectedMethod === method.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center",
                      selectedMethod === method.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">{method.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Summary */}
        <div className="lg:w-[380px]">
          <div className="bg-card rounded-2xl border p-6 space-y-4">
            <h2 className="text-lg font-semibold">Resumo</h2>

            {/* Expandable invoices list */}
            <div className="bg-muted rounded-lg">
              <button
                onClick={() => setExpandedSummary(!expandedSummary)}
                className="w-full flex items-center justify-between p-4"
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
                <div className="border-t border-border/50 divide-y divide-border/50">
                  {invoices.map((invoice) => (
                    <div key={invoice.id} className="p-4 text-sm">
                      <div className="flex justify-between">
                        <span>Fatura de {invoice.month}, {invoice.year}</span>
                        <span className="font-medium">
                          {formatCurrency(invoice.amount)}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        Vencimento: {invoice.dueDate}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Totals */}
            <div className="space-y-3 pt-4">
              <div className="flex justify-between text-sm">
                <span>Valor das faturas</span>
                <span>{formatCurrency(invoicesTotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-1">
                  Serviços da plataforma
                  <Info className="w-3 h-3 text-muted-foreground" />
                </span>
                <span>{formatCurrency(PLATFORM_FEE)}</span>
              </div>
            </div>

            {/* Total */}
            <div className="pt-4 border-t">
              <div className="flex justify-between items-baseline">
                <span className="text-muted-foreground">Valor total</span>
                <span className="text-2xl font-bold">
                  {formatCurrency(totalAmount)}
                </span>
              </div>
            </div>

            {/* Pay button */}
            <Button
              onClick={handlePayment}
              disabled={isLoading}
              className="w-full h-12 text-base"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Processando...
                </div>
              ) : (
                "Confirmar e pagar"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
