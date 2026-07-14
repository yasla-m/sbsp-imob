import { useState, useMemo } from "react";
import { FileText, CreditCard, ChevronLeft } from "lucide-react";
import { Invoice } from "@/data/invoices";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { CurrentBillCard } from "@/components/dashboard/CurrentBillCard";
import { BillStatusCard } from "@/components/dashboard/BillStatusCard";
import { ConsumptionChart, BillingMonthData } from "@/components/dashboard/ConsumptionChart";
import { InvoicesList } from "@/components/dashboard/InvoicesList";
import { QuickActionCard } from "@/components/dashboard/QuickActionCard";
import { PaymentFlow } from "@/components/payment/PaymentFlow";
import { Badge } from "@/components/ui/badge";
import { useSelection } from "@/contexts/SelectionContext";
import { useInvoices } from "@/contexts/InvoicesContext";
import { getPropertyTypeLabel } from "@/data/companies";
import { differenceInDays, parse } from "date-fns";
import { getDemoToday } from "@/lib/demo-date";

const monthAbbr: Record<string, string> = {
  Janeiro: "JAN", Fevereiro: "FEV", Março: "MAR", Abril: "ABR", Maio: "MAI", Junho: "JUN",
  Julho: "JUL", Agosto: "AGO", Setembro: "SET", Outubro: "OUT", Novembro: "NOV", Dezembro: "DEZ",
};
const monthOrder = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

const ImovelDetalhe = () => {
  const [activeItem, setActiveItem] = useState("imoveis");
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { selectedCompany } = useSelection();
  const { getInvoicesByAddressIds, getInvoiceUtils } = useInvoices();

  const propertyIds = useMemo(
    () => selectedCompany?.properties.map((p) => p.id) ?? [],
    [selectedCompany],
  );

  const imovelInvoices = useMemo(
    () => getInvoicesByAddressIds(propertyIds),
    [propertyIds, getInvoicesByAddressIds],
  );

  const { pendingInvoices, pendingTotal, hasOverdue, openInvoices } = useMemo(
    () => getInvoiceUtils(imovelInvoices),
    [imovelInvoices, getInvoiceUtils],
  );

  const billLabel = useMemo(() => {
    if (hasOverdue) {
      const count = pendingInvoices.length;
      return count === 1 ? "1 fatura pendente" : `${count} faturas pendentes`;
    }
    if (openInvoices.length > 0) {
      const sorted = [...openInvoices].sort(
        (a, b) =>
          parse(a.dueDate, "dd/MM/yyyy", new Date()).getTime() -
          parse(b.dueDate, "dd/MM/yyyy", new Date()).getTime(),
      );
      const dueDate = parse(sorted[0].dueDate, "dd/MM/yyyy", new Date());
      const days = differenceInDays(dueDate, getDemoToday());
      if (days === 0) return "Vence hoje";
      return `Vence em ${days} dia${days !== 1 ? "s" : ""}`;
    }
    return "Sem faturas pendentes";
  }, [hasOverdue, openInvoices, pendingInvoices]);

  // Dados financeiros mensais do imóvel (recebido / em aberto / em atraso)
  const billingData: BillingMonthData[] = useMemo(() => {
    const map = new Map<string, BillingMonthData & { sortKey: number }>();
    imovelInvoices.forEach((inv) => {
      const key = `${inv.month}-${inv.year}`;
      if (!map.has(key)) {
        map.set(key, {
          month: `${monthAbbr[inv.month] || inv.month.slice(0, 3).toUpperCase()} ${inv.year.slice(-2)}`,
          fullMonth: inv.month,
          year: inv.year,
          paid: 0, pending: 0, overdue: 0,
          sortKey: parseInt(inv.year) * 12 + monthOrder.indexOf(inv.month),
        });
      }
      const b = map.get(key)!;
      if (inv.status === "paid") b.paid += inv.amount;
      else if (inv.status === "overdue") { b.pending += inv.amount; b.overdue! += inv.amount; }
      else b.pending += inv.amount;
    });
    return Array.from(map.values())
      .sort((a, b) => a.sortKey - b.sortKey)
      .slice(-12)
      .map(({ sortKey, ...rest }) => rest);
  }, [imovelInvoices]);

  const handleNavigation = (item: string) => {
    setActiveItem(item);
    if (item === "imoveis") navigate("/");
    else if (item === "faturas") navigate("/faturas");
    else if (item === "servicos") navigate("/servicos");
  };

  const handleCheckout = (selected: Invoice[]) => {
    navigate("/faturas", { state: { skipToCheckout: true, invoices: selected } });
  };

  if (!selectedCompany) {
    return (
      <div className="flex h-screen bg-background">
        <div className="hidden md:block">
          <Sidebar activeItem={activeItem} onItemClick={handleNavigation} className="border-0 bg-secondary border-none border-background" />
        </div>
        <div className="flex-1 flex items-center justify-center bg-background">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Nenhum imóvel selecionado.</p>
            <button onClick={() => navigate("/")} className="text-primary font-medium">Voltar para Imóveis</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-background">
      <div className="hidden md:block">
        <Sidebar activeItem={activeItem} onItemClick={handleNavigation} className="border-0 bg-secondary border-none border-background" />
      </div>
      <Sidebar activeItem={activeItem} onItemClick={handleNavigation} isMobileOpen={isSidebarOpen} onMobileClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden border-0 border-none bg-background">
        <Header className="border-0 border-none py-[16px] px-4 md:px-[16px] bg-background shrink-0" onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="flex-1 min-h-0 p-4 md:p-8 overflow-auto border-accent rounded-3xl border-0 bg-white mx-2 md:mx-[16px] mb-2 md:mb-[16px]">
          <div className="max-w-[1200px] mx-auto w-full">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ChevronLeft className="w-4 h-4" />
              Imóveis
            </button>

            <div className="mb-6 md:mb-8 animate-fade-in">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">{selectedCompany.name}</h1>
                <Badge variant="secondary" className="rounded-full font-normal">
                  {getPropertyTypeLabel(selectedCompany.tipo)}
                </Badge>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                CNPJ nº {selectedCompany.cnpj} · {selectedCompany.fornecimentosCount}{" "}
                {selectedCompany.fornecimentosCount === 1 ? "fornecimento" : "fornecimentos"}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="space-y-4 md:space-y-6">
                {imovelInvoices.length === 0 ? (
                  <BillStatusCard variant="empty" />
                ) : pendingInvoices.length === 0 ? (
                  <BillStatusCard variant="allPaid" />
                ) : (
                  <CurrentBillCard
                    amount={pendingTotal}
                    label={billLabel}
                    hasOverdue={hasOverdue}
                    onPayClick={() => setPaymentOpen(true)}
                  />
                )}
                <InvoicesList invoices={imovelInvoices} />
              </div>

              <div className="flex flex-col h-full">
                <ConsumptionChart data={billingData} className="flex-1 flex flex-col" />
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <QuickActionCard icon={FileText} title="Solicitações de serviços" onClick={() => navigate("/servicos/solicitacoes")} />
              <QuickActionCard icon={CreditCard} title="Preços e prazos de serviços" />
            </div>
          </div>
        </main>
      </div>

      <PaymentFlow open={paymentOpen} onOpenChange={setPaymentOpen} invoices={imovelInvoices} onCheckout={handleCheckout} />
    </div>
  );
};

export default ImovelDetalhe;
