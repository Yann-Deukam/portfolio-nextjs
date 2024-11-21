"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AlignRight } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight size={32} className="text-teal-400" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* LOGO */}
        <div className="my-20 text-center">
          <Link href="/">
            <h1 className="text-2xl font-extrabold">
              g-ni
              <span className="text-2xl text-teal-400">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.path}>
              <Link
                href={link.path}
                className={`${
                  link.path === pathname
                    ? "nav-link text-teal-400 dark:text-teal-300 font-bold text-xl"
                    : "nav-link"
                }`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
