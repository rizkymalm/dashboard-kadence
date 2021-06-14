import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import IconDashboard from "@material-ui/icons/Dashboard";
import IconShoppingCart from "@material-ui/icons/ShoppingCart";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";
import BusinessIcon from "@material-ui/icons/Business";

import SideBarMenuItem from "./sideBarMenuItem";

// Modified style dari material UI
const drawerWidth = 240;
const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: "100%",
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: "#97c05c",
    },
  })
);

const sideBarCustomizeMenu = [
  {
    name: "Dashboard",
    link: "/dashboard",
    Icon: IconDashboard,
  },
  {
    name: "Tabulasi",
    link: "/dashboard/tabulasi",
    Icon: IconShoppingCart,
  },
  {
    name: "Brand Usage",
    Icon: IconLibraryBooks,
    items: [
      {
        name: "Chart",
        link: "/dashboard/detail/brand/chart",
      },
      {
        name: "Table",
        link: "/dashboard/detail/brand/table",
      },
    ],
  },
  {
    name: "Detail Cabang",
    link: "/dashboard/detail-cabang",
    Icon: BusinessIcon,
  },
];

const SideBarMenu = () => {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {sideBarCustomizeMenu.map((item, key) => (
        <SideBarMenuItem key={key} {...item} />
      ))}
    </List>
  );
};

export default SideBarMenu;
