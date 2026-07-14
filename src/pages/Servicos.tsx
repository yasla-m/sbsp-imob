import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  DollarSign,
  Building2,
  HelpCircle,
  Headphones,
  LayoutGrid,
  Smartphone,
  Receipt,
  BarChart3,
  CreditCard,
  RefreshCcw,
  ChevronRight,
} from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
}

const ServiceCard = ({ icon, title, onClick }: ServiceCardProps) => (
  <Card 
    className="p-4 md:p-6 cursor-pointer hover:border-primary/30 transition-all border border-border bg-card" 
    onClick={onClick}
  >
    <div className="text-muted-foreground mb-4 md:mb-8">{icon}</div>
    <span className="text-sm md:text-base text-foreground font-medium">{title}</span>
  </Card>
);

interface ServiceListItemProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
}

const ServiceListItem = ({ icon, title, onClick }: ServiceListItemProps) => (
  <button
    className="w-full flex items-center justify-between p-3 md:p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-all"
    onClick={onClick}
  >
    <div className="flex items-center gap-3">
      <span className="text-muted-foreground">{icon}</span>
      <span className="text-sm md:text-base text-foreground">{title}</span>
    </div>
    <ChevronRight className="w-5 h-5 text-muted-foreground" />
  </button>
);

const Servicos = () => {
  const [activeItem, setActiveItem] = useState("servicos");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

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
          <div className="max-w-[1200px] mx-auto w-full">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8">Serviços</h1>

            {/* Top Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-10">
              <ServiceCard
                icon={<FileText className="w-6 h-6 md:w-8 md:h-8" />}
                title="Solicitações de serviços"
                onClick={() => navigate("/servicos/solicitacoes")}
              />
              <ServiceCard 
                icon={<DollarSign className="w-6 h-6 md:w-8 md:h-8" />} 
                title="Preços e prazos de serviços" 
              />
              <ServiceCard 
                icon={<Building2 className="w-6 h-6 md:w-8 md:h-8" />} 
                title="Agências para grandes clientes" 
              />
            </div>

            {/* Bottom Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
              {/* Atendimento Section */}
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">Atendimento</h2>
                <div className="space-y-2 md:space-y-3">
                  <ServiceListItem icon={<HelpCircle className="w-5 h-5" />} title="Perguntas frequentes" />
                  <ServiceListItem icon={<Headphones className="w-5 h-5" />} title="Canais de atendimento" />
                  <ServiceListItem icon={<LayoutGrid className="w-5 h-5" />} title="Sistema Eimob" />
                  <ServiceListItem icon={<Smartphone className="w-5 h-5" />} title="Sabesp Fácil" />
                </div>
              </div>

              {/* Outros serviços Section */}
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">Outros serviços</h2>
                <div className="space-y-2 md:space-y-3">
                  <ServiceListItem icon={<Receipt className="w-5 h-5" />} title="Emitir segunda via" />
                  <ServiceListItem icon={<BarChart3 className="w-5 h-5" />} title="Revisão de fatura" />
                  <ServiceListItem icon={<CreditCard className="w-5 h-5" />} title="Cadastro de representante legal" />
                  <ServiceListItem icon={<RefreshCcw className="w-5 h-5" />} title="Mudança de titularidade" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Servicos;
