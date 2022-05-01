import React from "react";
import {
  AppBar,
  Box,
  Chip,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { CartIcon } from "../icons";
import { LocalMallOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WeirdCart
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Chip icon={<LocalMallOutlined bgcolor="white" />} label={amount} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
