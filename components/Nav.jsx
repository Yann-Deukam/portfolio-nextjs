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
          className={`${
            link.path === pathname &&
            "nav-link text-indigo-400 dark:text-indigo-300 font-bold"
          } nav-link`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
