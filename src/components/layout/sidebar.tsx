"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, type IconName } from "@/components/ui/icon";
import { site } from "@/data/site";

type NavItem = { href: string; label: string; icon: IconName };

const NAV: NavItem[] = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/about", label: "About", icon: "user" },
  { href: "/projects", label: "Projects", icon: "folder" },
  { href: "/skills", label: "Skills", icon: "sparkles" },
  { href: "/experience", label: "Experience", icon: "briefcase" },
  { href: "/contact", label: "Contact", icon: "mail" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Auto-close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Mobile top bar (hidden on md+) */}
      <header className="md:hidden flex items-center justify-between rounded-card bg-rail px-5 py-3.5 text-white">
        <Link href="/" className="inline-flex items-center gap-1">
          <span className="text-xl font-bold tracking-tight">{site.initials}</span>
          <span className="text-accent text-base">·</span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          aria-expanded={open}
          className="rounded-lg p-2 text-white/80 hover:bg-rail-hover hover:text-white"
        >
          <Icon name="menu" className="h-5 w-5" />
        </button>
      </header>

      {/* Backdrop (mobile drawer only) */}
      <button
        type="button"
        aria-label="Close navigation"
        onClick={() => setOpen(false)}
        tabIndex={open ? 0 : -1}
        className={
          "md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity " +
          (open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none")
        }
      />

      {/* Sidebar — slide-out drawer on mobile, sticky column on md+ */}
      <aside
        className={
          "fixed inset-y-0 left-0 z-50 w-[260px] flex flex-col bg-rail text-white p-5 " +
          "transition-transform duration-300 ease-out " +
          (open ? "translate-x-0" : "-translate-x-full") +
          " md:sticky md:inset-auto md:top-4 md:z-auto md:h-[calc(100vh-2rem)] " +
          "md:w-[200px] md:shrink-0 md:rounded-card md:translate-x-0"
        }
        aria-hidden={!open && typeof window !== "undefined" && window.innerWidth < 768}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-1 px-1">
            <span className="text-2xl font-bold tracking-tight">{site.initials}</span>
            <span className="text-accent text-lg">·</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
            className="md:hidden rounded-lg p-2 text-white/70 hover:bg-rail-hover hover:text-white"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors " +
                  (active
                    ? "bg-accent text-white"
                    : "text-white/70 hover:bg-rail-hover hover:text-white")
                }
              >
                <Icon name={item.icon} className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto text-xs text-white/40">© {site.name}</div>
      </aside>
    </>
  );
}
