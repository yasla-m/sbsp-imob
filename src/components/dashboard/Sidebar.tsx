import { useState } from "react";
import { FileText, Grid3X3 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import sabespLogo from "@/assets/sabesp-logo.png";

function HouseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
  className?: string;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

const menuItems = [
  { id: "imoveis", label: "Imóveis", icon: HouseIcon },
  { id: "faturas", label: "Faturas", icon: FileText },
  { id: "servicos", label: "Serviços", icon: Grid3X3 },
];

function SidebarContent({
  activeItem,
  onItemClick,
}: {
  activeItem: string;
  onItemClick: (item: string) => void;
}) {
  return (
    <TooltipProvider delayDuration={0}>
      {/* Logo */}
      <div className="border-b border-sidebar-border bg-background h-20 md:h-[88px] flex items-center justify-center px-2">
        <img
          src={sabespLogo}
          alt="Sabesp"
          className="h-8 w-8 object-contain"
          loading="lazy"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 py-4 bg-background px-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          const button = (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={cn(
                "sidebar-item w-full text-left justify-center px-0",
                isActive && "active"
              )}
            >
              <Icon className="w-5 h-5 shrink-0" />
            </button>
          );

          return (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>{button}</TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
    </TooltipProvider>
  );
}

export function Sidebar({ activeItem, onItemClick, className, isMobileOpen, onMobileClose }: SidebarProps) {
  // Mobile Sheet
  if (isMobileOpen !== undefined && onMobileClose) {
    return (
      <Sheet open={isMobileOpen} onOpenChange={(open) => !open && onMobileClose()}>
        <SheetContent side="left" className="p-0 w-56 bg-card">
          <aside className="w-full bg-card h-full flex flex-col">
            <SidebarContent
              activeItem={activeItem}
              onItemClick={(item) => {
                onItemClick(item);
                onMobileClose();
              }}
            />
          </aside>
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop Sidebar — always collapsed
  return (
    <aside
      className={cn(
        "bg-card h-screen flex flex-col border-r border-sidebar-border w-16",
        className
      )}
    >
      <SidebarContent activeItem={activeItem} onItemClick={onItemClick} />
    </aside>
  );
}
