import AnchorIcon from "@mui/icons-material/Anchor";
import { HeaderLinks } from "../interfaces/links";
export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <AnchorIcon className="size-3.5" />,
    href: "/crypo",
    public_name: "Crypto",
  },
  {
    icon: <AnchorIcon className="size-3.5" />,
    href: "/about",
    public_name: "About",
  },
  {
    icon: <AnchorIcon className="size-3.5" />,
    href: "/contact",
    public_name: "Contact us",
  },
];
