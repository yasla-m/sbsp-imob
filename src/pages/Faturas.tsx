import { useState, useMemo, useEffect } from "react";
import { Download, Loader2, Calendar, X, Disc, CreditCard } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { CurrentBillCard } from "@/components/dashboard/CurrentBillCard";
import { InvoicesTable } from "@/components/dashboard/InvoicesTable";
import { CheckoutScreen } from "@/components/payment/CheckoutScreen";
import { PaymentSuccessScreen } from "@/components/payment/PaymentSuccessScreen";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelection } from "@/contexts/SelectionContext";
import { useInvoices } from "@/contexts/InvoicesContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { Invoice } from "@/data/invoices";
import { toast } from "sonner";
import { getDemoToday } from "@/lib/demo-date";
import { differenceInDays, parse, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import type { DateRange } from "react-day-picker";

type ViewMode = "list" | "checkout" | "success";

interface LocationState {
  skipToCheckout?: boolean;
  invoices?: Invoice[];
}

const Faturas = () => {
  const [activeItem, setActiveItem] = useState("faturas");
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [selectedInvoices, setSelectedInvoices] = useState<Invoice[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [tableSelectedIds, setTableSelectedIds] = useState<Set<string>>(new Set());
  const [isExporting, setIsExporting] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Filter states
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [statusFilter, setStatusFilter] = useState<Set<string>>(new Set());
  const [datePopoverOpen, setDatePopoverOpen] = useState(false);
  const [statusPopoverOpen, setStatusPopoverOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const { selectedProperty, portfolioMode, getAllProperties } = useSelection();
  const { getInvoicesByAddress, getInvoicesByAddressIds, getInvoiceUtils, markInvoicesAsPaid } = useInvoices();

  useEffect(() => {
    const state = location.state as LocationState;
    if (state?.skipToCheckout && state?.invoices) {
      setSelectedInvoices(state.invoices);
      setViewMode("checkout");
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname]);

  const portfolioInvoices = useMemo(() => {
    if (portfolioMode) {
      return getInvoicesByAddressIds(getAllProperties().map(p => p.id));
    }
    if (!selectedProperty) return [];
    return getInvoicesByAddress(selectedProperty.id);
  }, [portfolioMode, selectedProperty, getAllProperties, getInvoicesByAddressIds, getInvoicesByAddress]);

  const { pendingInvoices, pendingTotal, hasOverdue, overdueInvoices, openInvoices } = useMemo(() => {
    return getInvoiceUtils(portfolioInvoices);
  }, [portfolioInvoices, getInvoiceUtils]);

  const selectedTableInvoices = useMemo(
    () => portfolioInvoices.filter((inv) => tableSelectedIds.has(inv.id)),
    [portfolioInvoices, tableSelectedIds],
  );
  const selectedTableTotal = useMemo(
    () => selectedTableInvoices.reduce((sum, inv) => sum + inv.amount, 0),
    [selectedTableInvoices],
  );

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

  const billLabel = useMemo(() => {
    if (hasOverdue) {
      const count = pendingInvoices.length;
      return count === 1 ? "1 fatura pendente" : `${count} faturas pendentes`;
    }
    
    if (openInvoices.length > 0) {
      const sortedByDueDate = [...openInvoices].sort((a, b) => {
        const dateA = parse(a.dueDate, "dd/MM/yyyy", new Date());
        const dateB = parse(b.dueDate, "dd/MM/yyyy", new Date());
        return dateA.getTime() - dateB.getTime();
      });
      
      const nearestInvoice = sortedByDueDate[0];
      const dueDate = parse(nearestInvoice.dueDate, "dd/MM/yyyy", new Date());
      const daysUntilDue = differenceInDays(dueDate, getDemoToday());
      
      if (daysUntilDue === 0) return "Vence hoje";
      return `Vence em ${daysUntilDue} dia${daysUntilDue !== 1 ? 's' : ''}`;
    }
    
    return "Sem faturas pendentes";
  }, [hasOverdue, pendingInvoices, overdueInvoices, openInvoices]);

  const isDateFilterActive = dateRange?.from !== undefined;
  const isStatusFilterActive = statusFilter.size > 0;

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'overdue': return 'Em atraso';
      case 'open': return 'Em aberto';
      case 'paid': return 'Paga';
      case 'processing': return 'Processando';
      default: return status;
    }
  };

  const getSelectedStatusLabels = () => {
    const selected = Array.from(statusFilter);
    const first2 = selected.slice(0, 2).map(s => getStatusLabel(s)).join(', ');
    return first2;
  };

  const toggleStatusFilter = (status: string) => {
    const newFilter = new Set(statusFilter);
    if (newFilter.has(status)) {
      newFilter.delete(status);
    } else {
      newFilter.add(status);
    }
    setStatusFilter(newFilter);
  };

  const clearStatusFilter = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setStatusFilter(new Set());
    setStatusPopoverOpen(false);
  };

  const clearDateFilter = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setDateRange(undefined);
    setDatePopoverOpen(false);
  };

  const handleNavigation = (item: string) => {
    setActiveItem(item);
    if (item === "inicio") {
      navigate("/");
    } else if (item === "imoveis") {
      navigate("/");
    } else if (item === "faturas") {
      navigate("/faturas");
    } else if (item === "servicos") {
      navigate("/servicos");
    }
  };

  const handlePaymentSuccess = (method: string) => {
    setPaymentMethod(method);
    markInvoicesAsPaid(selectedInvoices.map(inv => inv.id));
    setViewMode("success");
  };

  const handleBackToList = () => {
    setViewMode("list");
    setSelectedInvoices([]);
    setPaymentMethod("");
  };

  const handleExportSelected = async () => {
    setIsExporting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsExporting(false);
    toast.success("Faturas exportadas", { 
      duration: 4000,
      className: "bg-secondary text-secondary-foreground rounded-full px-4 py-2"
    });
    clearTableSelection();
  };

  const handleExportInvoice = async (invoiceId: string) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success("Faturas exportadas", { 
      duration: 4000,
      className: "bg-secondary text-secondary-foreground rounded-full px-4 py-2"
    });
  };

  const clearTableSelection = () => {
    setTableSelectedIds(new Set());
  };

  const handlePaySelected = () => {
    setSelectedInvoices(selectedTableInvoices);
    setViewMode("checkout");
  };

  const renderContent = () => {
    if (viewMode === "checkout") {
      return (
        <CheckoutScreen
          invoices={selectedInvoices}
          onBack={handleBackToList}
          onPaymentSuccess={handlePaymentSuccess}
        />
      );
    }

    if (viewMode === "success") {
      return (
        <PaymentSuccessScreen
          invoices={selectedInvoices}
          paymentMethod={paymentMethod}
          onClose={handleBackToList}
        />
      );
    }

    const showPaymentCard = pendingInvoices.length > 0;

    return (
      <div className="max-w-[1200px] mx-auto w-full space-y-4 md:space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Faturas</h1>
        </div>

        {showPaymentCard && (
          <CurrentBillCard
            amount={pendingTotal}
            label={billLabel}
            hasOverdue={hasOverdue}
          />
        )}

        {/* Filters Section */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Date Range Filter */}
          <Popover open={datePopoverOpen} onOpenChange={setDatePopoverOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "h-10 px-3 gap-2 w-full sm:w-auto justify-start",
                  isDateFilterActive && "bg-primary/10 border-primary text-primary hover:bg-primary/15 hover:text-primary"
                )}
              >
                <Calendar className={cn("w-4 h-4", isDateFilterActive ? "text-primary" : "text-muted-foreground")} />
                <span className={cn("text-sm font-medium", isDateFilterActive ? "text-primary" : "text-foreground")}>
                  <span className="hidden sm:inline">Data de vencimento</span>
                  <span className="sm:hidden">Vencimento</span>
                </span>
                
                {isDateFilterActive && dateRange?.from && (
                  <>
                    <div className="w-px h-4 bg-primary/30" />
                    <span className="text-sm text-primary">
                      {format(dateRange.from, "dd/MM/yyyy")}{dateRange.to ? ` - ${format(dateRange.to, "dd/MM/yyyy")}` : ''}
                    </span>
                  </>
                )}
                
                {isDateFilterActive && (
                  <X
                    className="w-4 h-4 text-primary hover:text-primary/80 cursor-pointer shrink-0 ml-1"
                    onClick={clearDateFilter}
                  />
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-popover" align="start">
              <CalendarComponent
                mode="range"
                selected={dateRange}
                onSelect={(range) => setDateRange(range)}
                numberOfMonths={isMobile ? 1 : 2}
                locale={ptBR}
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>

          {/* Multi-Select Status Filter */}
          <Popover open={statusPopoverOpen} onOpenChange={setStatusPopoverOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "h-10 px-3 gap-2 w-full sm:w-auto justify-start",
                  isStatusFilterActive && "bg-primary/10 border-primary text-primary hover:bg-primary/15 hover:text-primary"
                )}
              >
                <Disc className={cn("w-4 h-4", isStatusFilterActive ? "text-primary" : "text-muted-foreground")} />
                <span className={cn("text-sm font-medium", isStatusFilterActive ? "text-primary" : "text-foreground")}>Situação</span>
                
                {statusFilter.size > 0 && (
                  <>
                    <div className="w-px h-4 bg-primary/30" />
                    <span className="text-sm text-primary">
                      {getSelectedStatusLabels()}
                    </span>
                    {statusFilter.size > 2 && (
                      <span className="bg-primary text-primary-foreground px-1.5 py-0.5 rounded text-xs font-medium">
                        +{statusFilter.size - 2}
                      </span>
                    )}
                  </>
                )}
                
                {isStatusFilterActive && (
                  <X
                    className="w-4 h-4 text-primary hover:text-primary/80 cursor-pointer shrink-0 ml-1"
                    onClick={clearStatusFilter}
                  />
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-2 bg-popover" align="start">
              <div className="flex flex-col gap-1">
                {[
                  { value: 'open', label: 'Em aberto' },
                  { value: 'overdue', label: 'Em atraso' },
                  { value: 'paid', label: 'Paga' },
                  { value: 'processing', label: 'Processando' },
                ].map(option => (
                  <label
                    key={option.value}
                    className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-muted cursor-pointer"
                  >
                    <span className="text-sm">{option.label}</span>
                    <Checkbox
                      checked={statusFilter.has(option.value)}
                      onCheckedChange={() => toggleStatusFilter(option.value)}
                    />
                  </label>
                ))}
                
                {statusFilter.size > 0 && (
                  <>
                    <div className="h-px bg-border my-1" />
                    <button
                      onClick={(e) => clearStatusFilter(e)}
                      className="w-full px-3 py-2 text-sm text-center hover:bg-muted rounded-md text-muted-foreground"
                    >
                      Limpar filtros
                    </button>
                  </>
                )}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <InvoicesTable
          invoices={portfolioInvoices}
          dateRange={dateRange}
          statusFilter={statusFilter}
          selectedIds={tableSelectedIds}
          onSelectedIdsChange={setTableSelectedIds}
          onExportInvoice={handleExportInvoice}
          showPropertyColumn={portfolioMode}
        />
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar 
          activeItem={activeItem} 
          onItemClick={handleNavigation} 
          className="border-0 border-none bg-secondary" 
        />
      </div>

      {/* Mobile Sidebar */}
      <Sidebar
        activeItem={activeItem}
        onItemClick={handleNavigation}
        isMobileOpen={isSidebarOpen}
        onMobileClose={() => setIsSidebarOpen(false)}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden border-0 border-none bg-background">
        <Header 
          className="border-0 border-none py-[16px] px-4 md:px-[16px] bg-background shrink-0" 
          onMenuClick={() => setIsSidebarOpen(true)}
        />
        
        <main className="flex-1 min-h-0 p-4 md:p-8 overflow-auto border-accent rounded-3xl border-0 bg-white mx-2 md:mx-[16px] mb-2 md:mb-[16px]">
          {renderContent()}
        </main>
      </div>

      {/* Fixed Selection Action Bar */}
      {viewMode === "list" && tableSelectedIds.size > 0 && (
        <div className="fixed bottom-4 left-4 md:left-[240px] right-4 mx-0 md:mx-4 p-3 md:p-4 bg-card border border-border rounded-xl shadow-lg flex items-center justify-between z-50">
          <div>
            <p className="text-xs md:text-sm font-medium text-muted-foreground">
              {tableSelectedIds.size} fatura{tableSelectedIds.size !== 1 ? 's' : ''} selecionada{tableSelectedIds.size !== 1 ? 's' : ''}
            </p>
            <p className="text-lg md:text-xl font-bold text-foreground">
              {formatCurrency(selectedTableTotal)}
            </p>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-primary hover:bg-primary/10 hidden sm:flex"
              onClick={clearTableSelection}
            >
              Limpar seleção
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:text-primary hover:bg-primary/10 sm:hidden"
              onClick={clearTableSelection}
            >
              <X className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary"
              onClick={handleExportSelected}
              disabled={isExporting}
            >
              {isExporting ? (
                <Loader2 className="w-4 h-4 md:mr-2 animate-spin" />
              ) : (
                <Download className="w-4 h-4 md:mr-2" />
              )}
              <span className="hidden md:inline">Exportar</span>
            </Button>
            <Button size="sm" onClick={handlePaySelected}>
              <CreditCard className="w-4 h-4 md:mr-2" />
              <span className="hidden md:inline">Pagar</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faturas;
