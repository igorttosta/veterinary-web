"use client";

import SideLbar from "./toolbar/SideLbar";
import Topbar from "./toolbar/Topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <div className="flex flex-1">
        <SideLbar />
        <main className="p-4 flex-1">{children}</main>
      </div>
    </div>
  );
}