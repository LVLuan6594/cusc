import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logoCusc from "../asset/img/logo_cusc.jpg";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" className="main-appbar">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Inline SVG logo to avoid external asset issues */}
              <Box
                className="main-logo"
                component="span"
                sx={{ display: "inline-flex", alignItems: "center" }}
              >
                <img
                  src={logoCusc}
                  srcSet={`${logoCusc} 1x`}
                  alt="CUSC Logo"
                  className="main-logo-img"
                  width={220}
                  height={220}
                  role="button"
                  tabIndex={0}
                  onClick={() => (window.location.href = "/")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") window.location.href = "/src/pages/Home.tsx";
                  }}
                  style={{ borderRadius: 8, objectFit: "contain", cursor: "pointer" }}
                />
              </Box>
            {/* <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
              CUSC
            </Typography> */}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            <ListItemButton component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton component={Link} to="/dashboard">
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            {/* Example products */}
            <ListItemButton component={Link} to="/product/alpha">
              <ListItemText primary="Product Alpha" />
            </ListItemButton>
            <ListItemButton component={Link} to="/product/beta">
              <ListItemText primary="Product Beta" />
            </ListItemButton>
            <ListItemButton component={Link} to="/product/gamma">
              <ListItemText primary="Product Gamma" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
