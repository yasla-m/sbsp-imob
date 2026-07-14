import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
export function PromoBanner() {
  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border flex animate-fade-in">
      <img
        src="https://i.ibb.co/zHW575hq/Footer-Image.png"
        alt="Nova experiência"
        className="w-40 h-full object-cover flex-shrink-0"
      />

      <div className="p-5 flex-1 flex items-center justify-between py-[20px] px-[24px]">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            Estamos construindo uma nova experiência para sua empresa!
          </h3>
          <p className="text-sm text-muted-foreground pt-[8px] py-0">
            Se precisar de outros serviços, acesse a antiga Agência Virtual.
          </p>
        </div>
        <Button variant="outline" className="gap-2 ml-4 bg-blue-50 border-0 text-blue-900">
          Acessar
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
