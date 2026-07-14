import { FileSearch, Banknote } from "lucide-react";
import { cn } from "@/lib/utils";

interface BillStatusCardProps {
  variant: "empty" | "allPaid";
}

export function BillStatusCard({ variant }: BillStatusCardProps) {
  const isAllPaid = variant === "allPaid";

  return (
    <div
      className={cn(
        "rounded-xl p-6 flex items-center justify-between animate-fade-in",
        isAllPaid 
          ? "bg-primary/10" 
          : "bg-card border border-border"
      )}
    >
      <div>
        <p className={cn(
          "text-xl font-bold mb-1",
          isAllPaid ? "text-primary" : "text-foreground"
        )}>
          {isAllPaid ? "Faturas em dia!" : "Sem faturas"}
        </p>
        <p className={cn(
          "text-sm",
          isAllPaid ? "text-primary/70" : "text-muted-foreground"
        )}>
          A próxima fatura a pagar aparecerá aqui.
        </p>
      </div>
      <div className={cn(
        "w-14 h-14 rounded-lg flex items-center justify-center",
        isAllPaid ? "bg-primary/15" : "bg-muted"
      )}>
        {isAllPaid ? (
          <Banknote className="w-8 h-8 text-primary" />
        ) : (
          <FileSearch className="w-8 h-8 text-muted-foreground" />
        )}
      </div>
    </div>
  );
}
