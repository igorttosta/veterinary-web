"use client";

import { useState } from "react";
import Sidebar from "./toolbar/Sidebar";
import Topbar from "./toolbar/Topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      <Topbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <main className="p-4 flex-1">{children}</main>
      </div>
    </div>
  );
}