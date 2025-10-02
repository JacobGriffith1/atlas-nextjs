import type { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";

export default function UiLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex">
      <Sidebar />
      <section className="flex-1 p-6">{children}</section>
    </div>
  );
}