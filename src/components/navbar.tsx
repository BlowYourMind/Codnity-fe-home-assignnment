"use client";

import { useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { HeaderLink } from "../interfaces/links";
import { HEADER_LINKS } from "../config/links";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2">
        {HEADER_LINKS.map((link: HeaderLink, index: number) => {
          const isActive = link.href === pathname;

          return (
            <li
              key={index}
              className="relative flex h-[60px] items-center justify-center"
            >
              <a
                className={cn(
                  "rounded-sm px-3 py-2 text-sm font-medium transition-colors",
                  {
                    "text-muted-foreground hover:text-foreground": !isActive,
                    "text-foreground": isActive,
                  }
                )}
                href={link.href}
              >
                {link.public_name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
