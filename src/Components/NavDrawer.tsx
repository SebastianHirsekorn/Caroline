import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccessTime from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ImageIcon from '@mui/icons-material/Image';
import MenuIcon from '@mui/icons-material/Menu';
import "../styles/Drawer.css";

interface IDrawer {
  handlePageChange: (page: page) => void;
}

type page = "Countdown" | "Calendar" | "Album";

export default function NavDrawer(props: IDrawer) {
  const [open, setOpen] = useState<boolean>(false);

  const pages: { text: string; page: page }[] = [
    { text: "Countdown", page: "Countdown" },
    { text: "Calendar", page: "Calendar" },
    { text: "Album", page: "Album" },
  ];

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  function getIcon(index: number) {
    switch (index) {
      case 0:
        return <AccessTime></AccessTime>
      case 1:
        return <CalendarMonthIcon></CalendarMonthIcon>
      case 2:
        return <ImageIcon></ImageIcon>
      default:
        break;
    }
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((item: { text: string; page: page }, index: number) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => props.handlePageChange(item.page)}>
              <ListItemIcon>
                {getIcon(index)}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="drawerContainer">
      <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer(true)}>
          {<MenuIcon sx={{ fontSize: 40, color: "white" }}></MenuIcon>}
        </Button>
        <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
