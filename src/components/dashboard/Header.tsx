import { ChevronDown, Building2, Menu, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  className?: string;
  onMenuClick?: () => void;
}

// Nome da imobiliária exibido no contexto do portal.
// Para trocar na demo, altere apenas esta constante.
const IMOBILIARIA_NOME = "Imobiliária Modelo";

export function Header({ className, onMenuClick }: HeaderProps) {
  return (
    <header className={cn("px-4 md:px-6 py-3", className)}>
      <div className="flex items-center gap-3">
        {/* Mobile menu */}
        <Button variant="ghost" size="icon" className="md:hidden shrink-0" onClick={onMenuClick}>
          <Menu className="w-5 h-5" />
        </Button>

        {/* Contexto: imobiliária logada */}
        <div className="flex-1 min-w-0 flex items-center h-12 md:h-14 pl-2 pr-4 rounded-full bg-card border border-border/60">
          <div className="flex items-center gap-2.5 min-w-0 h-9 md:h-10 pl-2 pr-3">
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4 text-primary" />
            </span>
            <span className="text-sm font-semibold text-foreground truncate">
              {IMOBILIARIA_NOME}
            </span>
          </div>
        </div>

        {/* Right: notificações + usuário */}
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:inline-flex rounded-full h-12 w-12 bg-card border border-border/60 relative"
            title="Notificações"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-500" />
          </Button>

          <button className="flex items-center gap-2.5 h-12 md:h-14 pl-1.5 pr-3 md:pr-5 rounded-full bg-card border border-border/60 hover:bg-muted/40 transition-colors">
            <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <span className="text-primary font-semibold text-xs">AD</span>
            </div>
            <span className="hidden md:block text-sm font-semibold text-foreground">Administrador</span>
            <ChevronDown className="hidden md:block w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
