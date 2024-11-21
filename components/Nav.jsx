"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`relative nav-link ${
            link.path === pathname
              ? "text-teal-400 dark:text-teal-300 font-bold active-link"
              : ""
          }`}
        >
          {link.name}
          {link.path === pathname && (
            <span className="absolute bottom-0 left-0 w-5 h-[1.5px] bg-teal-400"></span>
          )}
        </Link>
      ))}
    </nav>
  );
}
