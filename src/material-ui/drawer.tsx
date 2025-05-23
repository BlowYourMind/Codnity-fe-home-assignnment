import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { HEADER_LINKS } from "../config/links";
import { HeaderLink } from "../interfaces/links";
export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      className="bg-foreground saturate-100 px-2 h-full"
      onClick={toggleDrawer(false)}
    >
      <List className="gap-1 flex flex-col ">
        {HEADER_LINKS.map((text: HeaderLink, index) => (
          <ListItem key={index} disablePadding>
            <a
              href={text.href}
              className="flex pl-3 py-1 hover:bg-backgroundHover w-full justify-start items-center rounded-lg"
            >
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.public_name} />
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="block md:hidden">
      <Button className="px-2 !min-w-[unset]" onClick={toggleDrawer(true)}>
        <MenuIcon className=" text-foreground size-3.5" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}
