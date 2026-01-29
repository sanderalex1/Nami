import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import menuButton from "../assets/menuButton.svg";
import basketCase from "../assets/basketCase.svg";
import cross from "../assets/cross.svg";

const Navbar = ({ open, onMenuClick, onCloseSidebar }) => {
  return (
    <AppBar
      elevation={0}
      sx={(theme) => ({
        position: "fixed",
        width: "100%",
        zIndex: theme.zIndex.drawer + 1,
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
          onClick={() => onCloseSidebar()}
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

        <IconButton
          onClick={() => open && onCloseSidebar()}
          to={!open && "/shopping_cart"}
          component={RouterLink}
        >
          <img src={open ? cross : basketCase} alt="" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
