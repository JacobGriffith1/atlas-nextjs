import type { ReactNode } from "react";
import SideNav from "@/components/Sidenav";

export default async function Layout ({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <aside className="w-full flex-none md:w-64">
        <SideNav />
      </aside>

      <main className="flex-grow md:overflow-y-auto p-6 md:p-12">{children}</main>
    </div>
  );
}
