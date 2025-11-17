"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-me", label: "About Me" },
  { href: "/research-paper", label: "Research Paper" },
  { href: "/presentation", label: "Presentation" },
  { href: "/video", label: "Video" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-teal-200/40 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.slice(1).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-teal-100 text-teal-700"
                      : "text-slate-600 hover:bg-teal-50 hover:text-teal-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
