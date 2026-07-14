import { Card } from "@/components/ui/card";
import { Clock, AlertTriangle, Pause, XCircle, CheckCircle } from "lucide-react";
import { Solicitacao, SolicitacaoStatus } from "@/data/solicitacoes";
import { cn } from "@/lib/utils";

interface StatusCount {
  status: SolicitacaoStatus;
  count: number;
  label: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

interface SolicitacoesStatusDashboardProps {
  solicitacoes: Solicitacao[];
  className?: string;
}

export const SolicitacoesStatusDashboard = ({ solicitacoes, className }: SolicitacoesStatusDashboardProps) => {
  const iconClasses = "w-4 h-4";
  
  const statusCounts: StatusCount[] = [
    {
      status: 'em_andamento',
      count: solicitacoes.filter(s => s.status === 'em_andamento').length,
      label: 'Em andamento',
      icon: <Clock className={cn(iconClasses, "text-pending")} />,
      bgColor: 'bg-[hsl(var(--pending)/0.15)]',
      iconColor: 'text-pending',
    },
    {
      status: 'pendente',
      count: solicitacoes.filter(s => s.status === 'pendente').length,
      label: 'Pendentes',
      icon: <AlertTriangle className={cn(iconClasses, "text-pending")} />,
      bgColor: 'bg-[hsl(var(--pending)/0.15)]',
      iconColor: 'text-pending',
    },
    {
      status: 'interrompida',
      count: solicitacoes.filter(s => s.status === 'interrompida').length,
      label: 'Interrompidas',
      icon: <Pause className={cn(iconClasses, "text-[hsl(var(--overdue))]")} />,
      bgColor: 'bg-[hsl(var(--overdue)/0.15)]',
      iconColor: 'text-[hsl(var(--overdue))]',
    },
    {
      status: 'cancelada',
      count: solicitacoes.filter(s => s.status === 'cancelada').length,
      label: 'Canceladas',
      icon: <XCircle className={cn(iconClasses, "text-[hsl(var(--overdue))]")} />,
      bgColor: 'bg-[hsl(var(--overdue)/0.15)]',
      iconColor: 'text-[hsl(var(--overdue))]',
    },
    {
      status: 'finalizada',
      count: solicitacoes.filter(s => s.status === 'finalizada').length,
      label: 'Finalizadas',
      icon: <CheckCircle className={cn(iconClasses, "text-paid")} />,
      bgColor: 'bg-[hsl(var(--paid)/0.15)]',
      iconColor: 'text-paid',
    },
  ];

  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3", className)}>
      {statusCounts.map((item) => (
        <Card 
          key={item.status} 
          className="p-3 md:p-4 flex items-center gap-3 border border-border"
        >
          <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", item.bgColor)}>
            {item.icon}
          </div>
          <div>
            <p className="text-lg md:text-xl font-semibold text-foreground">{item.count}</p>
            <p className="text-xs text-muted-foreground">{item.label}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
