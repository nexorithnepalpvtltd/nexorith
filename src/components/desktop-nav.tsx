"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/configs/site";
import { cn } from "@/utils/cn";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <Link
                href={navLink.href}
                className={cn(
                  "p-4 text-sm transition-all ease-in-out hover:text-primary",
                  pathname === navLink.href && "font-medium text-primary",
                )}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
