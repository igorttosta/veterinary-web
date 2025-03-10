"use client";

import Sidebar from "./toolbar/Sidebar";
import Topbar from "./toolbar/Topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />

      <div className="flex flex-1">
        <Sidebar />
        <main className="p-4 flex-1">{children}</main>
      </div>
    </div>
  );
}