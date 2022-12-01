import { ReactNode } from "react";

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="lg:flex w-full h-full min-h-screen">
      {children}
    </div>
  );
}
