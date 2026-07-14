import { useRef, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";
import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BillingMonthData {
  month: string;      // "NOV 25"
  fullMonth?: string; // "Novembro"
  year?: string;
  paid: number;       // R$
  pending: number;    // R$ (open + overdue)
  overdue?: number;   // R$ (subset of pending, for tooltip)
}

interface ConsumptionChartProps {
  data: BillingMonthData[];
  className?: string;
}

const formatCurrency = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(v);

const formatCurrencyFull = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload as BillingMonthData;
  const total = d.paid + d.pending;
  const rate = total > 0 ? Math.round((d.paid / total) * 100) : 0;
  return (
    <div className="bg-card border border-border rounded-lg shadow-lg p-3 min-w-[200px]">
      <p className="font-semibold text-foreground text-sm mb-2">
        {d.fullMonth || d.month} {d.year || ""}
      </p>
      <div className="space-y-1.5 text-xs">
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Recebido
          </span>
          <span className="font-medium text-foreground">{formatCurrencyFull(d.paid)}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Em aberto
          </span>
          <span className="font-medium text-foreground">{formatCurrencyFull(d.pending)}</span>
        </div>
        {d.overdue !== undefined && d.overdue > 0 && (
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Em atraso
            </span>
            <span className="font-medium text-red-600">{formatCurrencyFull(d.overdue)}</span>
          </div>
        )}
        <div className="border-t border-border pt-1.5 mt-1.5 flex items-center justify-between">
          <span className="text-muted-foreground">Taxa de recebimento</span>
          <span className="font-semibold text-foreground">{rate}%</span>
        </div>
      </div>
    </div>
  );
};

export function ConsumptionChart({ data, className }: ConsumptionChartProps) {
  const isEmpty = data.length === 0 || data.every(d => d.paid === 0 && d.pending === 0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
  }, [data]);

  const totalPaid = data.reduce((s, d) => s + d.paid, 0);
  const totalPending = data.reduce((s, d) => s + d.pending, 0);
  const totalBilled = totalPaid + totalPending;
  const collectionRate = totalBilled > 0 ? Math.round((totalPaid / totalBilled) * 100) : 0;

  // Month-over-month trend on billed amount (last vs previous)
  const trend = (() => {
    if (data.length < 2) return null;
    const last = data[data.length - 1];
    const prev = data[data.length - 2];
    const lastT = last.paid + last.pending;
    const prevT = prev.paid + prev.pending;
    if (prevT === 0) return null;
    const pct = Math.round(((lastT - prevT) / prevT) * 100);
    return pct;
  })();

  return (
    <div className={cn("bg-card rounded-2xl p-6 border border-border/60 animate-fade-in", className)}>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Faturamento mensal</h3>
          <p className="text-sm text-muted-foreground">Recebido vs. em aberto — últimos 12 meses</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
            <span className="text-muted-foreground">Recebido</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-500" />
            <span className="text-muted-foreground">Em aberto</span>
          </div>
        </div>
      </div>

      {isEmpty ? (
        <div className="flex-1 flex flex-col items-center justify-center py-12 text-center">
          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-muted-foreground" />
          </div>
          <p className="font-medium text-foreground mb-1">Sem faturamento no período</p>
          <p className="text-sm text-muted-foreground">Os valores aparecerão aqui conforme as faturas forem emitidas.</p>
        </div>
      ) : (
        <>
          <div ref={scrollRef} className="flex-1 min-h-[220px] mb-6 overflow-x-auto">
            <div style={{ width: "100%", minWidth: `${Math.max(data.length * 56, 400)}px`, height: 220 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 10, right: 8, left: 8, bottom: 5 }} barCategoryGap={12}>
                  <CartesianGrid vertical={false} stroke="hsl(var(--border))" strokeDasharray="3 3" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                    tickFormatter={(v) => (v >= 1000 ? `${(v / 1000).toFixed(0)}k` : `${v}`)}
                    width={44}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
                  <Bar dataKey="paid" stackId="a" fill="hsl(142 70% 45%)" radius={[0, 0, 4, 4]} maxBarSize={40} />
                  <Bar dataKey="pending" stackId="a" fill="hsl(38 92% 55%)" radius={[6, 6, 0, 0]} maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Recebido (12m)</p>
              <p className="text-sm font-semibold text-emerald-600">{formatCurrency(totalPaid)}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Em aberto (12m)</p>
              <p className="text-sm font-semibold text-amber-600">{formatCurrency(totalPending)}</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                Taxa de recebimento
                {trend !== null && (
                  <span className={cn("inline-flex items-center gap-0.5 text-[10px] font-medium",
                    trend >= 0 ? "text-emerald-600" : "text-red-600"
                  )}>
                    {trend >= 0 ? "▲" : "▼"} {Math.abs(trend)}%
                  </span>
                )}
              </p>
              <p className="text-sm font-semibold text-foreground">{collectionRate}%</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
