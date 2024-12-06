"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import { navLinks } from "@/configs/site";
import { cn } from "@/utils/cn";

import { NexorithLogo } from "./icons/logo";

export function MobileNav() {
  const pathname = usePathname();

  const [isSheetOpened, setIsSheetOpened] = useState(false);

  return (
    <Sheet open={isSheetOpened} onOpenChange={setIsSheetOpened}>
      <SheetTrigger asChild>
        <Button className="md:hidden" variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <NexorithLogo className="h-8 text-primary" />
          </SheetTitle>
        </SheetHeader>

        <ul className="mt-6 flex flex-col gap-2">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <Link
                href={navLink.href}
                className={cn(
                  "block py-1 text-sm transition-all ease-in-out hover:text-primary",
                  pathname === navLink.href && "font-medium text-primary",
                )}
                onClick={() => setIsSheetOpened(false)}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
