import { AppBar, Toolbar, Box, IconButton, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import menuButton from "../assets/menuButton.svg";
import basketCase from "../assets/basketCase.svg";
import cross from "../assets/cross.svg";

const Navbar = ({ open, onMenuClick, appBarBg }) => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={(theme) => ({
        width: "100%",
        zIndex: theme.zIndex.drawer + 1,
        boxSizing: "border-box",
        backgroundColor:
          appBarBg === "paper"
            ? theme.palette.background.paper
            : theme.palette.background.default,
        color: theme.palette.text.primary,
        boxShadow: "none",
        color: theme.palette.text.primary,
      })}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: "auto",
          padding: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton onClick={onMenuClick}>
          <img src={menuButton} alt="" />
        </IconButton>

        <Typography
          component={RouterLink}
          to="/"
          variant="h4"
          sx={{
            whiteSpace: "nowrap",
            textTransform: "lowercase",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          nami
        </Typography>

        <IconButton component={RouterLink} to="/shopping_cart">
          <img src={open ? cross : basketCase} alt="" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
