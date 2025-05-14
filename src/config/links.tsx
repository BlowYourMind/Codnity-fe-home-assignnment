import { FooterLinks, HeaderLinks } from "../interfaces/links";
import {
  SITE_GITHUB_URL,
  SITE_INSTAGRAM_URL,
  SITE_LINKEDIN_URL,
  SITE_TELEGRAM_URL,
} from "../constants/contact";
import {
  Book,
  CurrencyBitcoin,
  GitHub,
  Home,
  Instagram,
  LinkedIn,
  Sms,
  Telegram,
} from "@mui/icons-material";
export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <CurrencyBitcoin className="size-3.5" />,
    href: "/crypto",
    public_name: "Crypto",
  },
  {
    icon: <Book className="size-3.5" />,
    href: "/about",
    public_name: "About",
  },
];
export const FOOTER_LINKS: FooterLinks = [
  {
    links: [
      {
        href: "/",
        public_name: "Home",
        icon: <Home className="size-3.5" />,
      },
      {
        href: "/crypto",
        public_name: "Crypto",
        icon: <CurrencyBitcoin className="size-3.5" />,
      },
      {
        href: "/about",
        public_name: "About",
        icon: <Book className="size-3.5" />,
      },
    ],
  },
  {
    links: [
      {
        href: SITE_TELEGRAM_URL,
        public_name: "Telegram",
        icon: <Telegram className="size-3.5" />,
      },
      {
        href: SITE_INSTAGRAM_URL,
        public_name: "Instagram",
        icon: <Instagram className="size-3.5" />,
      },
      {
        href: SITE_GITHUB_URL,
        public_name: "Github",
        icon: <GitHub className="size-3.5" />,
      },
      {
        href: SITE_LINKEDIN_URL,
        public_name: "Linkedin",
        icon: <LinkedIn className="size-3.5" />,
      },
    ],
  },
];
