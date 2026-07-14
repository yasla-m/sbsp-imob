import { useState, useMemo } from "react";
import { format, parseISO } from "date-fns";
import { ArrowUpDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Solicitacao, getStatusLabel, getStatusClass, getStatusDotColor } from "@/data/solicitacoes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SolicitacoesTableProps {
  solicitacoes: Solicitacao[];
  className?: string;
}

type SortDirection = 'asc' | 'desc';

export const SolicitacoesTable = ({ solicitacoes, className }: SolicitacoesTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const sortedSolicitacoes = useMemo(() => {
    return [...solicitacoes].sort((a, b) => {
      const dateA = new Date(a.data).getTime();
      const dateB = new Date(b.data).getTime();
      return sortDirection === 'desc' ? dateB - dateA : dateA - dateB;
    });
  }, [solicitacoes, sortDirection]);

  const totalPages = Math.ceil(sortedSolicitacoes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = sortedSolicitacoes.slice(startIndex, endIndex);

  const formatDate = (dateStr: string) => {
    return format(parseISO(dateStr), "dd/MM/yyyy");
  };

  const toggleSort = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="w-[160px]">
                <button 
                  onClick={toggleSort}
                  className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  Data da solicitação
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">Nº do protocolo</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">Descrição</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">Situação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                  Nenhuma solicitação encontrada.
                </TableCell>
              </TableRow>
            ) : (
              currentItems.map((sol) => (
                <TableRow key={sol.id} className="hover:bg-muted/20">
                  <TableCell className="text-sm text-foreground">
                    {formatDate(sol.data)}
                  </TableCell>
                  <TableCell className="text-sm text-foreground font-mono">
                    {sol.protocolo}
                  </TableCell>
                  <TableCell className="text-sm text-foreground">
                    {sol.descricao}
                  </TableCell>
                  <TableCell>
                    <span className={cn("status-badge", getStatusClass(sol.status))}>
                      <span className={cn("w-2 h-2 rounded-full", getStatusDotColor(sol.status))} />
                      {getStatusLabel(sol.status)}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-muted-foreground">
          {sortedSolicitacoes.length} de {sortedSolicitacoes.length} solicitação(ões) exibida(s).
        </p>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground whitespace-nowrap">Linhas por página</span>
            <Select value={itemsPerPage.toString()} onValueChange={handleItemsPerPageChange}>
              <SelectTrigger className="w-[70px] h-8">
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

          <div className="flex items-center gap-1">
            <span className="text-muted-foreground whitespace-nowrap">
              Página {currentPage} de {totalPages || 1}
            </span>
            
            <div className="flex items-center gap-1 ml-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              >
                <ChevronsLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
