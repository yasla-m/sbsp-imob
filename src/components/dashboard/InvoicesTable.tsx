import { useState, useMemo, useCallback } from "react";
import { Calendar, Download, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ArrowUpDown, ArrowUp, ArrowDown, Loader2, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { parse, isWithinInterval } from "date-fns";
import { useIsMobile } from "@/hooks/use-mobile";
import type { DateRange } from "react-day-picker";
import type { Invoice } from "@/data/invoices";
import { companiesData, Property } from "@/data/companies";

type SortField = 'month' | 'dueDate' | 'status' | 'issueDate' | 'amount' | null;
type SortDirection = 'asc' | 'desc';

interface InvoicesTableProps {
  invoices: Invoice[];
  dateRange?: DateRange;
  statusFilter?: Set<string>;
  selectedIds?: Set<string>;
  onSelectedIdsChange?: (ids: Set<string>) => void;
  onExportInvoice?: (invoiceId: string) => Promise<void>;
  showPropertyColumn?: boolean;
}

const allProperties = companiesData.flatMap(c => c.properties);
const propertyMap = new Map(allProperties.map(p => [p.id, p]));

export function InvoicesTable({
  invoices,
  dateRange,
  statusFilter,
  selectedIds: externalSelectedIds,
  onSelectedIdsChange,
  onExportInvoice,
  showPropertyColumn = false
}: InvoicesTableProps) {
  const [internalSelectedIds, setInternalSelectedIds] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [exportingId, setExportingId] = useState<string | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const isMobile = useIsMobile();

  const selectedIds = externalSelectedIds ?? internalSelectedIds;
  const setSelectedIds = onSelectedIdsChange ?? setInternalSelectedIds;

  const getPropertyByAddressId = useCallback((addressId: string): Property | undefined => {
    return propertyMap.get(addressId);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const getStatusLabel = (status: Invoice['status']) => {
    switch (status) {
      case 'overdue': return 'Em atraso';
      case 'open': return 'Em aberto';
      case 'paid': return 'Paga';
    }
  };

  const getStatusClass = (status: Invoice['status']) => {
    switch (status) {
      case 'overdue': return 'status-overdue';
      case 'open': return 'status-pending';
      case 'paid': return 'status-paid';
    }
  };

  const getStatusDotClass = (status: Invoice['status']) => {
    switch (status) {
      case 'overdue': return 'bg-[hsl(var(--overdue))]';
      case 'open': return 'bg-pending';
      case 'paid': return 'bg-paid';
    }
  };

  const isDateFilterActive = dateRange?.from !== undefined;
  const isStatusFilterActive = statusFilter && statusFilter.size > 0;

  const filteredInvoices = useMemo(() => {
    return invoices.filter(invoice => {
      if (statusFilter && statusFilter.size > 0 && !statusFilter.has(invoice.status)) return false;

      if (dateRange?.from) {
        const invoiceDate = parse(invoice.dueDate, "dd/MM/yyyy", new Date());
        if (dateRange.to) {
          if (!isWithinInterval(invoiceDate, {
            start: dateRange.from,
            end: dateRange.to
          })) {
            return false;
          }
        } else {
          if (invoiceDate < dateRange.from) return false;
        }
      }
      return true;
    });
  }, [invoices, statusFilter, dateRange]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else {
        setSortField(null);
        setSortDirection('asc');
      }
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-4 h-4 opacity-50" />;
    }
    return sortDirection === 'asc' 
      ? <ArrowUp className="w-4 h-4" /> 
      : <ArrowDown className="w-4 h-4" />;
  };

  const sortedInvoices = useMemo(() => {
    const parseDate = (dateStr: string) => parse(dateStr, "dd/MM/yyyy", new Date());
    
    if (sortField) {
      return [...filteredInvoices].sort((a, b) => {
        let comparison = 0;
        
        switch (sortField) {
          case 'month':
            const monthOrder = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
            const yearCompare = parseInt(a.year) - parseInt(b.year);
            if (yearCompare !== 0) comparison = yearCompare;
            else comparison = monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
            break;
          case 'dueDate':
            comparison = parseDate(a.dueDate).getTime() - parseDate(b.dueDate).getTime();
            break;
          case 'status':
            const statusOrder: Record<string, number> = { overdue: 0, open: 1, paid: 2 };
            comparison = statusOrder[a.status] - statusOrder[b.status];
            break;
          case 'issueDate':
            const dateA = a.issueDate ? parseDate(a.issueDate).getTime() : 0;
            const dateB = b.issueDate ? parseDate(b.issueDate).getTime() : 0;
            comparison = dateA - dateB;
            break;
          case 'amount':
            comparison = a.amount - b.amount;
            break;
        }
        
        return sortDirection === 'asc' ? comparison : -comparison;
      });
    }
    
    return [...filteredInvoices].sort((a, b) => {
      const statusPriority: Record<string, number> = { overdue: 0, open: 1, paid: 2 };
      
      if (statusPriority[a.status] !== statusPriority[b.status]) {
        return statusPriority[a.status] - statusPriority[b.status];
      }
      
      const dateA = parseDate(a.dueDate);
      const dateB = parseDate(b.dueDate);
      
      return a.status === 'paid' 
        ? dateB.getTime() - dateA.getTime() 
        : dateA.getTime() - dateB.getTime();
    });
  }, [filteredInvoices, sortField, sortDirection]);

  const totalPages = Math.ceil(sortedInvoices.length / itemsPerPage);
  const paginatedInvoices = sortedInvoices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const toggleSelect = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === paginatedInvoices.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(paginatedInvoices.map(inv => inv.id)));
    }
  };

  const getHeaderCheckboxState = (): boolean | "indeterminate" => {
    if (selectedIds.size === 0) return false;
    if (selectedIds.size === paginatedInvoices.length && paginatedInvoices.length > 0) return true;
    return "indeterminate";
  };

  // Number of page buttons to show
  const maxPageButtons = isMobile ? 3 : 5;

  return (
    <div className="bg-card rounded-xl border border-border animate-fade-in flex flex-col">
      {/* Table */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="p-3 md:p-4 w-12">
                <Checkbox
                  checked={getHeaderCheckboxState()}
                  onCheckedChange={toggleSelectAll}
                />
              </th>
              {showPropertyColumn && (
                <th className="p-3 md:p-4 text-left hidden md:table-cell">
                  <span className="text-xs md:text-sm font-medium text-muted-foreground">Imóvel</span>
                </th>
              )}
              <th className="p-3 md:p-4 text-left">
                <button
                  onClick={() => handleSort('month')}
                  className="flex items-center gap-1 text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mês
                  {getSortIcon('month')}
                </button>
              </th>
              <th className="p-3 md:p-4 text-left hidden sm:table-cell">
                <button 
                  onClick={() => handleSort('dueDate')}
                  className="flex items-center gap-1 text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Vencimento
                  {getSortIcon('dueDate')}
                </button>
              </th>
              <th className="p-3 md:p-4 text-left">
                <button 
                  onClick={() => handleSort('status')}
                  className="flex items-center gap-1 text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Situação
                  {getSortIcon('status')}
                </button>
              </th>
              <th className="p-3 md:p-4 text-left hidden lg:table-cell">
                <button 
                  onClick={() => handleSort('issueDate')}
                  className="flex items-center gap-1 text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Emissão
                  {getSortIcon('issueDate')}
                </button>
              </th>
              <th className="p-3 md:p-4 text-left">
                <button
                  onClick={() => handleSort('amount')}
                  className="flex items-center gap-1 text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Valor
                  {getSortIcon('amount')}
                </button>
              </th>
              <th className="p-3 md:p-4 w-12"></th>
            </tr>
          </thead>
          <tbody>
            {paginatedInvoices.length === 0 ? (
              <tr>
                <td colSpan={showPropertyColumn ? 8 : 7} className="p-8 md:p-12 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                      <Calendar className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
                    </div>
                    <p className="font-medium text-foreground mb-1 text-sm md:text-base">Nenhuma fatura encontrada</p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {isDateFilterActive || isStatusFilterActive 
                        ? "Tente ajustar os filtros para ver mais resultados."
                        : "Assim que as faturas fecharem, elas serão exibidas aqui."}
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              paginatedInvoices.map(invoice => (
                <tr key={invoice.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="p-3 md:p-4">
                    <Checkbox
                      checked={selectedIds.has(invoice.id)}
                      onCheckedChange={() => toggleSelect(invoice.id)}
                    />
                  </td>
                  {showPropertyColumn && (
                    <td className="p-3 md:p-4 hidden md:table-cell">
                      {(() => {
                        const property = getPropertyByAddressId(invoice.addressId);
                        return property ? (
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-muted-foreground shrink-0" />
                            <span className="text-sm text-foreground truncate max-w-[180px]" title={property.street}>
                              {property.street}
                            </span>
                          </div>
                        ) : (
                          <span className="text-sm text-muted-foreground">-</span>
                        );
                      })()}
                    </td>
                  )}
                  <td className="p-3 md:p-4">
                    <span className="text-foreground font-medium text-sm">
                      {invoice.month}, {invoice.year}
                    </span>
                    <span className="sm:hidden block text-xs text-muted-foreground mt-0.5">
                      {invoice.dueDate}
                    </span>
                  </td>
                  <td className="p-3 md:p-4 text-muted-foreground text-sm hidden sm:table-cell">
                    {invoice.dueDate}
                  </td>
                  <td className="p-3 md:p-4">
                    <span className={cn("status-badge text-xs", getStatusClass(invoice.status))}>
                      <span className={cn("w-2 h-2 rounded-full", getStatusDotClass(invoice.status))} />
                      <span className="hidden sm:inline">{getStatusLabel(invoice.status)}</span>
                    </span>
                  </td>
                  <td className="p-3 md:p-4 text-muted-foreground text-sm hidden lg:table-cell">
                    {invoice.issueDate || '-'}
                  </td>
                  <td className="p-3 md:p-4 text-foreground font-semibold text-sm">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="p-3 md:p-4">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-muted-foreground hover:text-foreground"
                      disabled={exportingId === invoice.id}
                      onClick={async () => {
                        if (onExportInvoice) {
                          setExportingId(invoice.id);
                          await onExportInvoice(invoice.id);
                          setExportingId(null);
                        }
                      }}
                    >
                      {exportingId === invoice.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Download className="w-4 h-4" />
                      )}
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {sortedInvoices.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between p-3 md:p-4 border-t border-border gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm text-muted-foreground hidden sm:inline">
              Mostrando {((currentPage - 1) * itemsPerPage) + 1} a {Math.min(currentPage * itemsPerPage, sortedInvoices.length)} de {sortedInvoices.length} faturas
            </span>
            <span className="text-xs text-muted-foreground sm:hidden">
              Página {currentPage} de {totalPages}
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Rows per page selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm text-muted-foreground hidden sm:inline">Linhas por página:</span>
              <Select 
                value={itemsPerPage.toString()} 
                onValueChange={(value) => {
                  setItemsPerPage(Number(value));
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger className="h-8 w-[70px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {totalPages > 1 && (
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                >
                  <ChevronsLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                {/* Page numbers */}
                {Array.from({ length: Math.min(maxPageButtons, totalPages) }, (_, i) => {
                  let pageNum: number;
                  if (totalPages <= maxPageButtons) {
                    pageNum = i + 1;
                  } else if (currentPage <= Math.ceil(maxPageButtons / 2)) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - Math.floor(maxPageButtons / 2)) {
                    pageNum = totalPages - maxPageButtons + 1 + i;
                  } else {
                    pageNum = currentPage - Math.floor(maxPageButtons / 2) + i;
                  }
                  
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  );
                })}

                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronsRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
