import { ReactNode } from "react";

export interface HeaderLink {
  icon: ReactNode;
  href: string;
  public_name: string;
}
export type HeaderLinks = Array<HeaderLink>;

export interface FooterLink {
  links: Array<{
    icon: ReactNode;
    href: string;
    public_name: string;
  }>;
}

export type FooterLinks = Array<FooterLink>;
