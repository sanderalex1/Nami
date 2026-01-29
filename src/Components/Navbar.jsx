import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import menuButton from "../assets/menuButton.svg";
import basketCase from "../assets/basketCase.svg";
import cross from "../assets/cross.svg";
import { useEffect, useState } from "react";

const Navbar = ({ open, onMenuClick, onCloseSidebar }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      elevation={0}
      sx={(theme) => ({
        position: "fixed",
        width: "100%",
        zIndex: theme.zIndex.drawer + 1,
        boxSizing: "border-box",
        backgroundColor: "transparent",
        backgroundImage: scrolled && `url(${import.meta.env.BASE_URL}home.png)`,
        color: theme.palette.text.primary,
        boxShadow: scrolled ? theme.shadows[4] : "none",
        transition: "all 0.3s ease", // smooth animation ✨
        backdropFilter: scrolled ? "blur(6px)" : "none", // optional glass effect
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
