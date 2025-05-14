import AnchorIcon from "@mui/icons-material/Anchor";
import { FooterLinks, HeaderLinks } from "../interfaces/links";
import {
  SITE_GITHUB_URL,
  SITE_INSTAGRAM_URL,
  SITE_LINKEDIN_URL,
  SITE_TELEGRAM_URL,
} from "../constants/contact";
export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <AnchorIcon className="size-3.5" />,
    href: "/crypto",
    public_name: "Crypto",
  },
  {
    icon: <AnchorIcon className="size-3.5" />,
    href: "/about",
    public_name: "About",
  },
  {
    icon: <AnchorIcon className="size-3.5" />,
    href: "/contact-us",
    public_name: "Contact us",
  },
];
export const FOOTER_LINKS: FooterLinks = [
  {
    links: [
      {
        href: "/",
        public_name: "Home",
        icon: <AnchorIcon className="size-3.5" />,
      },
      {
        href: "/crypto",
        public_name: "Crypto",
        icon: <AnchorIcon className="size-3.5" />,
      },
      {
        href: "/about",
        public_name: "About",
        icon: <AnchorIcon className="size-3.5" />,
      },
      {
        href: "/contact-us",
        public_name: "Contact Us",
        icon: <AnchorIcon className="size-3.5" />,
      },
    ],
  },
  {
    links: [
      {
        href: SITE_TELEGRAM_URL,
        public_name: "Telegram",
        icon: <AnchorIcon className="size-3.5" />,
      },
      {
        href: SITE_INSTAGRAM_URL,
        public_name: "Instagram",
        icon: <AnchorIcon className="size-3.5" />,
      },
      {
        href: SITE_GITHUB_URL,
        public_name: "Github",
        icon: <AnchorIcon className="size-3.5" />,
      },
      {
        href: SITE_LINKEDIN_URL,
        public_name: "Linkedin",
        icon: <AnchorIcon className="size-3.5" />,
      },
    ],
  },
]
