"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className }) => {
  const asPath = usePathname();
  const isActive = asPath === href;

  usePathname();

  return (
    <Link href={href} passHref className="text-decoration-none">
      <span className={`${className} ${isActive ? "active" : ""}`}>
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
