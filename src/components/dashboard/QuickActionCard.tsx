import { LucideIcon } from "lucide-react";

interface QuickActionCardProps {
  icon: LucideIcon;
  title: string;
  onClick?: () => void;
}

export function QuickActionCard({ icon: Icon, title, onClick }: QuickActionCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-card rounded-xl p-5 border border-border flex items-center gap-8 w-full text-left hover:border-primary/30 transition-all duration-200 animate-fade-in"
    >
      <Icon className="w-6 h-6 text-muted-foreground flex-shrink-0" />
      <span className="font-medium text-foreground">{title}</span>
    </button>
  );
}
