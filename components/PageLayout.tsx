import { ReactNode, useState } from "react";

interface PageLayoutProps {
  title?: string;
  children: ReactNode;
}

export default function PageLayout({
  title,
  children,
}: PageLayoutProps) {
  const [scroll, setScroll] = useState(0);

  return (
    <div
      onScroll={(e) => { setScroll(e.currentTarget.scrollTop); }}
      className="relative flex flex-1 flex-col max-h-screen overflow-y-auto"
    >
      <div className={`p-2 pr-3 flex justify-between bg-glass z-20 ${scroll ? "shadow-sm border-b" : "" } sticky top-0 border-june-bud dark:onyx transform duration-300`}>
        <div className="flex h-full items-center">
          <span className={`mx-2 text-lg font-bold self-center line-clamp-1`}>
            {scroll > 50 ? title : ""}
          </span>
        </div>
      </div>
      <div className="w-full">
        <main className="p-5">{children}</main>
      </div>
    </div>
  );
}
