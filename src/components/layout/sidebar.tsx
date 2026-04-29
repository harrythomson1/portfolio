"use client";

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

  return (
    <aside className="sticky top-4 h-[calc(100vh-2rem)] w-[200px] shrink-0 rounded-card bg-rail text-white flex flex-col p-5">
      <Link href="/" className="mb-8 inline-flex items-center gap-1 px-1">
        <span className="text-2xl font-bold tracking-tight">{site.initials}</span>
        <span className="text-accent text-lg">·</span>
      </Link>

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
  );
}
