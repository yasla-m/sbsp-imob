import { useState, useMemo, useEffect } from "react";
import { Search, ChevronRight, CreditCard, Building2, Wallet, CalendarClock, Scissors } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useSelection } from "@/contexts/SelectionContext";
import { useInvoices } from "@/contexts/InvoicesContext";
import { Company, getPropertyTypeLabel } from "@/data/companies";
import { differenceInDays, parse } from "date-fns";
import { getDemoToday } from "@/lib/demo-date";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

type Situacao = "corte" | "atraso" | "aberto" | "dia";

const situacaoMeta: Record<Situacao, { label: string; badgeClass: string; dot: string }> = {
  corte: { label: "Com corte", badgeClass: "status-overdue", dot: "bg-[hsl(var(--overdue))]" },
  atraso: { label: "Em atraso", badgeClass: "status-overdue", dot: "bg-[hsl(var(--overdue))]" },
  aberto: { label: "Em aberto", badgeClass: "status-pending", dot: "bg-[hsl(var(--pending))]" },
  dia: { label: "Em dia", badgeClass: "status-paid", dot: "bg-paid" },
};

const situacaoFilterOptions: { key: Situacao; label: string }[] = [
  { key: "corte", label: "Com corte" },
  { key: "atraso", label: "Em atraso" },
  { key: "aberto", label: "Em aberto" },
  { key: "dia", label: "Em dia" },
];

const PAGE_SIZE = 10;

const getPageNumbers = (current: number, total: number): (number | "ellipsis")[] => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const withEllipsis: (number | "ellipsis")[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) withEllipsis.push("ellipsis");
    withEllipsis.push(p);
  });
  return withEllipsis;
};

const Imoveis = () => {
  const [activeItem, setActiveItem] = useState("imoveis");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [situacaoFilter, setSituacaoFilter] = useState<Set<Situacao>>(new Set());
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { companies, setSelectedCompany } = useSelection();
  const { invoices, getInvoiceUtils } = useInvoices();

  const handleNavigation = (item: string) => {
    setActiveItem(item);
    if (item === "inicio") navigate("/");
    else if (item === "imoveis") navigate("/");
    else if (item === "faturas") navigate("/faturas");
    else if (item === "servicos") navigate("/servicos");
  };

  const carteira = useMemo(() => {
    return companies.map((company) => {
      const companyInvoices = invoices.filter((inv) =>
        company.properties.some((p) => p.id === inv.addressId),
      );
      const { pendingTotal } = getInvoiceUtils(companyInvoices);

      // Situação avaliada por fornecimento (não somando entre eles):
      // "Com corte" = algum fornecimento com 3+ faturas vencidas.
      let maxOverdue = 0;
      let anyOverdue = false;
      let anyPending = false;
      company.properties.forEach((p) => {
        const invs = invoices.filter((inv) => inv.addressId === p.id);
        const { overdueInvoices, pendingInvoices } = getInvoiceUtils(invs);
        maxOverdue = Math.max(maxOverdue, overdueInvoices.length);
        if (overdueInvoices.length > 0) anyOverdue = true;
        if (pendingInvoices.length > 0) anyPending = true;
      });

      let situacao: Situacao;
      if (maxOverdue >= 3) situacao = "corte";
      else if (anyOverdue) situacao = "atraso";
      else if (anyPending) situacao = "aberto";
      else situacao = "dia";

      return { company, pendingTotal, situacao };
    });
  }, [companies, invoices, getInvoiceUtils]);

  const resumo = useMemo(() => {
    const totalImoveis = carteira.length;
    const totalEmAberto = carteira.reduce((s, r) => s + r.pendingTotal, 0);
    const comCorte = carteira.filter((r) => r.situacao === "corte").length;
    const today = getDemoToday();
    const { openInvoices } = getInvoiceUtils(invoices);
    const vencendo7 = openInvoices.filter((inv) => {
      const days = differenceInDays(parse(inv.dueDate, "dd/MM/yyyy", new Date()), today);
      return days >= 0 && days <= 7;
    }).length;
    return { totalImoveis, totalEmAberto, comCorte, vencendo7 };
  }, [carteira, invoices, getInvoiceUtils]);

  const filtered = useMemo(() => {
    let result = carteira;
    if (situacaoFilter.size > 0) {
      result = result.filter((row) => situacaoFilter.has(row.situacao));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (row) =>
          row.company.name.toLowerCase().includes(q) ||
          row.company.cnpj.toLowerCase().includes(q) ||
          row.company.properties.some((p) => p.fornecimento.toLowerCase().includes(q)),
      );
    }
    return result;
  }, [carteira, situacaoFilter, search]);

  useEffect(() => {
    setPage(1);
  }, [search, situacaoFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const toggleFilter = (key: Situacao) => {
    setSituacaoFilter((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const openImovel = (company: Company) => {
    setSelectedCompany(company);
    navigate("/imovel");
  };

  return (
    <div className="flex h-screen bg-background">
      <div className="hidden md:block">
        <Sidebar
          activeItem={activeItem}
          onItemClick={handleNavigation}
          className="border-0 bg-secondary border-none border-background"
        />
      </div>
      <Sidebar
        activeItem={activeItem}
        onItemClick={handleNavigation}
        isMobileOpen={isSidebarOpen}
        onMobileClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col overflow-hidden border-0 border-none bg-slate-50">
        <Header
          className="border-0 border-none py-[16px] px-4 md:px-[16px] bg-slate-50 shrink-0"
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="flex-1 min-h-0 p-4 md:p-8 overflow-auto border-accent rounded-3xl border-0 bg-white mx-2 md:mx-[16px] mb-2 md:mb-[16px]">
          <div className="max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 md:mb-8 animate-fade-in">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Imóveis</h1>
              <Button size="lg" className="gap-2 shrink-0" onClick={() => navigate("/faturas")}>
                <CreditCard className="w-5 h-5" />
                Pagar faturas
              </Button>
            </div>

            {/* Resumo geral */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 md:mb-8">
              {[
                { label: "Imóveis administrados", value: String(resumo.totalImoveis), icon: Building2, bg: "bg-primary/10", accent: "text-primary" },
                { label: "Total em aberto", value: formatCurrency(resumo.totalEmAberto), icon: Wallet, bg: "bg-[hsl(var(--pending)/0.12)]", accent: "text-[hsl(var(--pending-foreground))]" },
                { label: "Vencendo em 7 dias", value: `${resumo.vencendo7} fatura${resumo.vencendo7 !== 1 ? "s" : ""}`, icon: CalendarClock, bg: "bg-primary/10", accent: "text-primary" },
                { label: "Imóveis com corte", value: String(resumo.comCorte), icon: Scissors, bg: "bg-[hsl(var(--overdue)/0.12)]", accent: "text-[hsl(var(--overdue-foreground))]" },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.label} className="rounded-xl border border-border bg-card p-4 md:p-5 flex flex-col gap-3 animate-fade-in">
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", card.bg)}>
                      <Icon className={cn("w-5 h-5", card.accent)} />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground mb-1">{card.label}</p>
                      <p className="text-xl md:text-2xl font-bold text-foreground">{card.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Busca + filtros */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar por imóvel, CNPJ ou fornecimento"
                  className="pl-9"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {situacaoFilterOptions.map((opt) => {
                  const active = situacaoFilter.has(opt.key);
                  return (
                    <button
                      key={opt.key}
                      onClick={() => toggleFilter(opt.key)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
                        active
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background text-muted-foreground border-border hover:border-primary/40",
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Lista */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="hidden md:grid grid-cols-[1fr_150px_140px_160px_40px] gap-4 px-5 py-3 border-b border-border bg-muted/30 text-xs font-medium text-muted-foreground">
                <span>Imóvel</span>
                <span>Fornecimentos</span>
                <span>Situação</span>
                <span className="text-right">Em aberto</span>
                <span></span>
              </div>

              {filtered.length === 0 ? (
                <div className="px-5 py-10 text-center text-sm text-muted-foreground">
                  Nenhum imóvel encontrado.
                </div>
              ) : (
                paginated.map((row) => {
                  const meta = situacaoMeta[row.situacao];
                  return (
                    <button
                      key={row.company.id}
                      onClick={() => openImovel(row.company)}
                      className="w-full text-left grid grid-cols-1 md:grid-cols-[1fr_150px_140px_160px_40px] gap-2 md:gap-4 px-5 py-4 border-b border-border last:border-0 hover:bg-muted/30 transition-colors items-center"
                    >
                      <div className="min-w-0 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Building2 className="w-4 h-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{row.company.name}</p>
                          <p className="text-xs text-muted-foreground truncate">
                            {getPropertyTypeLabel(row.company.tipo)} · CNPJ {row.company.cnpj}
                          </p>
                        </div>
                      </div>

                      <div>
                        <Badge variant="secondary" className="rounded-full font-normal text-xs">
                          {row.company.fornecimentosCount}{" "}
                          {row.company.fornecimentosCount === 1 ? "fornecimento" : "fornecimentos"}
                        </Badge>
                      </div>

                      <div>
                        <span className={cn("status-badge text-xs", meta.badgeClass)}>
                          <span className={cn("w-2 h-2 rounded-full", meta.dot)} />
                          {meta.label}
                        </span>
                      </div>

                      <div className="md:text-right">
                        <span
                          className={cn(
                            "text-sm font-semibold",
                            row.pendingTotal > 0 ? "text-foreground" : "text-muted-foreground",
                          )}
                        >
                          {row.pendingTotal > 0 ? formatCurrency(row.pendingTotal) : "—"}
                        </span>
                      </div>

                      <div className="hidden md:flex justify-end">
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3">
              <p className="text-xs text-muted-foreground">
                {filtered.length} de {carteira.length} imóveis
              </p>

              {totalPages > 1 && (
                <Pagination className="mx-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) setPage(currentPage - 1);
                        }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : undefined}
                      />
                    </PaginationItem>

                    {getPageNumbers(currentPage, totalPages).map((p, i) =>
                      p === "ellipsis" ? (
                        <PaginationItem key={`ellipsis-${i}`}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      ) : (
                        <PaginationItem key={p}>
                          <PaginationLink
                            href="#"
                            isActive={p === currentPage}
                            onClick={(e) => {
                              e.preventDefault();
                              setPage(p);
                            }}
                          >
                            {p}
                          </PaginationLink>
                        </PaginationItem>
                      ),
                    )}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) setPage(currentPage + 1);
                        }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : undefined}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Imoveis;
