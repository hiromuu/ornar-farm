"use client";
import NavBar from "@/components/ui/navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="font-sans bg-white text-gray-800">
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
