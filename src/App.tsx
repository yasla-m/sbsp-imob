import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SelectionProvider } from "@/contexts/SelectionContext";
import { InvoicesProvider } from "@/contexts/InvoicesContext";
import Imoveis from "./pages/Imoveis";
import ImovelDetalhe from "./pages/ImovelDetalhe";
import Faturas from "./pages/Faturas";
import Servicos from "./pages/Servicos";
import Solicitacoes from "./pages/Solicitacoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SelectionProvider>
        <InvoicesProvider>
          <Toaster />
          <Sonner position="top-center" />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Imoveis />} />
              <Route path="/imovel" element={<ImovelDetalhe />} />
              <Route path="/faturas" element={<Faturas />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/servicos/solicitacoes" element={<Solicitacoes />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </InvoicesProvider>
      </SelectionProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
