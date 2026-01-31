"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
};

export default function NavLink({
  href,
  children,
  className = "",
  activeClassName = "",
  exact = false,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  const combinedClassName = [
    className,
    isActive ? activeClassName: "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
}
