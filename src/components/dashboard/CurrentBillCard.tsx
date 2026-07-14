import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CurrentBillCardProps {
  dueInDays?: number;
  amount: number;
  label?: string;
  hasOverdue?: boolean;
  onPayClick?: () => void;
}

export function CurrentBillCard({
  dueInDays,
  amount,
  label,
  hasOverdue = false,
  onPayClick,
}: CurrentBillCardProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const displayLabel = label || `Vence em ${dueInDays} dias`;

  return (
    <div
      className={cn(
        "bill-card flex items-center justify-between animate-fade-in",
        hasOverdue && "danger"
      )}
    >
      <div>
        <p className="text-bill-text text-sm font-medium mb-1">{displayLabel}</p>
        <p className="text-bill-amount text-3xl font-bold">
          {formatCurrency(amount)}
        </p>
      </div>
      <Button
        variant={hasOverdue ? "payDanger" : "pay"}
        size="lg"
        className="gap-2"
        onClick={onPayClick}
      >
        <CreditCard className="w-5 h-5" />
        Pagar
      </Button>
    </div>
  );
}
