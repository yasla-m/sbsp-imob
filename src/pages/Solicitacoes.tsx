import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Calendar, X, Disc } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { format, parseISO, isWithinInterval, startOfDay, endOfDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { solicitacoesData, SolicitacaoStatus, getStatusLabel } from "@/data/solicitacoes";
import { cn } from "@/lib/utils";
import { useSelection } from "@/contexts/SelectionContext";
import { SolicitacoesStatusDashboard } from "@/components/solicitacoes/SolicitacoesStatusDashboard";
import { SolicitacoesTable } from "@/components/solicitacoes/SolicitacoesTable";
import { DateRange } from "react-day-picker";
import { useIsMobile } from "@/hooks/use-mobile";

const statusOptions: { key: SolicitacaoStatus; label: string }[] = [
  { key: 'em_andamento', label: 'Em andamento' },
  { key: 'pendente', label: 'Pendente' },
  { key: 'interrompida', label: 'Interrompida' },
  { key: 'cancelada', label: 'Cancelada' },
  { key: 'finalizada', label: 'Finalizada' }
];

const Solicitacoes = () => {
  const [activeItem, setActiveItem] = useState("servicos");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [statusFilter, setStatusFilter] = useState<Set<SolicitacaoStatus>>(new Set());
  const [datePopoverOpen, setDatePopoverOpen] = useState(false);
  const [statusPopoverOpen, setStatusPopoverOpen] = useState(false);
  const navigate = useNavigate();
  const { selectedCompany, selectedProperty, portfolioMode, getAllProperties } = useSelection();
  const isMobile = useIsMobile();

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

  const isDateFilterActive = dateRange?.from !== undefined;
  const isStatusFilterActive = statusFilter.size > 0;

  const toggleStatusFilter = (status: SolicitacaoStatus) => {
    const newFilter = new Set(statusFilter);
    if (newFilter.has(status)) {
      newFilter.delete(status);
    } else {
      newFilter.add(status);
    }
    setStatusFilter(newFilter);
  };

  const getSelectedStatusLabels = () => {
    const selected = Array.from(statusFilter);
    const first2 = selected.slice(0, 2).map(s => getStatusLabel(s)).join(', ');
    return first2;
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

  const filteredSolicitacoes = useMemo(() => {
    let result = solicitacoesData;

    if (!portfolioMode && selectedProperty) {
      result = result.filter(s => s.addressId === selectedProperty.id);
    } else if (portfolioMode && selectedCompany) {
      const propertyIds = selectedCompany.properties.map(p => p.id);
      result = result.filter(s => propertyIds.includes(s.addressId));
    }
    
    
    if (dateRange?.from) {
      result = result.filter(s => {
        const solDate = parseISO(s.data);
        const from = startOfDay(dateRange.from!);
        const to = dateRange.to ? endOfDay(dateRange.to) : endOfDay(dateRange.from!);
        return isWithinInterval(solDate, { start: from, end: to });
      });
    }
    
    if (statusFilter.size > 0) {
      result = result.filter(s => statusFilter.has(s.status));
    }
    
    if (searchQuery) {
      result = result.filter(s => 
        s.protocolo.includes(searchQuery) || 
        s.descricao.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return result;
  }, [selectedProperty, portfolioMode, selectedCompany, dateRange, statusFilter, searchQuery]);

  const getDateRangeText = () => {
    if (!dateRange?.from) return '';
    if (dateRange.to) {
      return `${format(dateRange.from, "dd/MM/yyyy")} - ${format(dateRange.to, "dd/MM/yyyy")}`;
    }
    return format(dateRange.from, "dd/MM/yyyy");
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
          className="border-0 border-none py-[16px] px-4 md:px-[16px] shrink-0 bg-background" 
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="flex-1 min-h-0 p-4 md:p-8 overflow-auto border-accent rounded-3xl border-0 bg-white mx-2 md:mx-[16px] mb-2 md:mb-[16px]">
          <div className="max-w-[1200px] mx-auto w-full">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Solicitações de serviços</h1>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              {portfolioMode
                ? `CNPJ nº ${selectedCompany?.cnpj || '-'} · Todos os imóveis`
                : `CNPJ nº ${selectedCompany?.cnpj || '-'} · Fornecimento nº ${selectedProperty?.fornecimento || '-'}`}
            </p>

            {/* Status Dashboard */}
            <SolicitacoesStatusDashboard 
              solicitacoes={filteredSolicitacoes} 
              className="mb-6"
            />

            {/* Search Input */}
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Buscar por nº do protocolo ou descrição" 
                className="pl-12 py-5 md:py-6 text-sm md:text-base rounded-xl border-border" 
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)} 
              />
            </div>

            {/* Filters - matching exact style from image */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              {/* Date Filter */}
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
                      Data da solicitação
                    </span>
                    
                    {isDateFilterActive && (
                      <>
                        <div className="w-px h-4 bg-primary/30" />
                        <span className="text-sm text-primary">
                          {getDateRangeText()}
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
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="range"
                    selected={dateRange}
                    onSelect={(range) => {
                      setDateRange(range);
                      if (range?.to) setDatePopoverOpen(false);
                    }}
                    numberOfMonths={isMobile ? 1 : 2}
                    locale={ptBR}
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              {/* Status Filter */}
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
                    <span className={cn("text-sm font-medium", isStatusFilterActive ? "text-primary" : "text-foreground")}>
                      Situação
                    </span>
                    
                    {isStatusFilterActive && (
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
                <PopoverContent className="w-[220px] p-2" align="start">
                  <div className="flex flex-col gap-1">
                    {statusOptions.map(option => (
                      <label 
                        key={option.key} 
                        className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-muted cursor-pointer"
                      >
                        <span className="text-sm">{option.label}</span>
                        <Checkbox 
                          checked={statusFilter.has(option.key)}
                          onCheckedChange={() => toggleStatusFilter(option.key)}
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

            {/* Table */}
            <SolicitacoesTable solicitacoes={filteredSolicitacoes} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Solicitacoes;
