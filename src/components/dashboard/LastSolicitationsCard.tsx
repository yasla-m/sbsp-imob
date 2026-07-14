import { Card } from "@/components/ui/card";
import { Clock, XCircle, CheckCircle, Pause } from "lucide-react";
import { Link } from "react-router-dom";
import { solicitacoesData, Solicitacao, getStatusLabel, getStatusClass, getStatusDotColor } from "@/data/solicitacoes";
import { format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";

interface LastSolicitationsCardProps {
  addressId?: string;
  className?: string;
}

const getStatusIcon = (status: Solicitacao['status']) => {
  const iconClasses = "w-4 h-4";
  switch (status) {
    case 'em_andamento':
      return (
        <div className="w-8 h-8 rounded-lg bg-[hsl(var(--pending)/0.15)] flex items-center justify-center">
          <Clock className={cn(iconClasses, "text-pending")} />
        </div>
      );
    case 'cancelada':
      return (
        <div className="w-8 h-8 rounded-lg bg-[hsl(var(--overdue)/0.15)] flex items-center justify-center">
          <XCircle className={cn(iconClasses, "text-[hsl(var(--overdue))]")} />
        </div>
      );
    case 'finalizada':
      return (
        <div className="w-8 h-8 rounded-lg bg-[hsl(var(--paid)/0.15)] flex items-center justify-center">
          <CheckCircle className={cn(iconClasses, "text-paid")} />
        </div>
      );
    case 'pendente':
      return (
        <div className="w-8 h-8 rounded-lg bg-[hsl(var(--pending)/0.15)] flex items-center justify-center">
          <Clock className={cn(iconClasses, "text-pending")} />
        </div>
      );
    case 'interrompida':
      return (
        <div className="w-8 h-8 rounded-lg bg-[hsl(var(--overdue)/0.15)] flex items-center justify-center">
          <Pause className={cn(iconClasses, "text-[hsl(var(--overdue))]")} />
        </div>
      );
    default:
      return (
        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
          <Clock className={cn(iconClasses, "text-muted-foreground")} />
        </div>
      );
  }
};

export const LastSolicitationsCard = ({ addressId, className }: LastSolicitationsCardProps) => {
  const filteredSolicitacoes = addressId 
    ? solicitacoesData.filter(s => s.addressId === addressId) 
    : solicitacoesData;
  
  const lastThree = [...filteredSolicitacoes]
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
    .slice(0, 3);

  const formatDate = (dateStr: string) => {
    return format(parseISO(dateStr), "dd/MM/yyyy");
  };

  return (
    <Card className={cn("p-4 md:p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Últimas solicitações</h3>
        <Link 
          to="/servicos/solicitacoes" 
          className="text-sm text-primary hover:underline"
        >
          Ver todas
        </Link>
      </div>

      <div className="space-y-3">
        {lastThree.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4">
            Nenhuma solicitação encontrada.
          </p>
        ) : (
          lastThree.map((sol) => (
            <div 
              key={sol.id} 
              className="flex items-center gap-4 py-2"
            >
              <div className="shrink-0">
                {getStatusIcon(sol.status)}
              </div>
              
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-[100px] shrink-0">
                  <p className="text-xs text-muted-foreground">Realizada em</p>
                  <p className="text-sm font-medium text-foreground">{formatDate(sol.data)}</p>
                </div>
                <div className="w-[130px] shrink-0">
                  <p className="text-xs text-muted-foreground">Nº do protocolo</p>
                  <p className="text-sm font-medium text-foreground">{sol.protocolo}</p>
                </div>
                <div className="hidden sm:block flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">Descrição</p>
                  <p className="text-sm text-foreground truncate">{sol.descricao}</p>
                </div>
              </div>

              <span className={cn("status-badge shrink-0", getStatusClass(sol.status))}>
                <span className={cn("w-2 h-2 rounded-full", getStatusDotColor(sol.status))} />
                {getStatusLabel(sol.status)}
              </span>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};
