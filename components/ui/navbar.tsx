"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./mobile-menu";

const navItems = [
  { name: "ホーム", href: "/" },
  { name: "このプロジェクトについて", href: "/about" },
  { name: "季節の体験", href: "/experiences" },
  { name: "オーナー制度", href: "/owner" },
  { name: "お問い合わせ", href: "/contact" },
  { name: "ギャラリー", href: "/gallery" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Ornar Farm
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-green-600",
                  pathname === item.href ? "text-green-600" : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
