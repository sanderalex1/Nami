import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import menuButton from "../assets/menuButton.svg";
import basketCase from "../assets/basketCase.svg";
import cross from "../assets/cross.svg";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ open, onMenuClick, onCloseSidebar }) => {
  const [showMenu, setShowMenu] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }

      lastScrollY.current = currentScrollY;
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
        backgroundImage: showMenu && `url(${import.meta.env.BASE_URL}home.png)`,
        color: theme.palette.text.primary,
        boxShadow: showMenu ? theme.shadows[4] : "none",
        transition: "transform 0.3s ease",
        transform: showMenu ? "translateY(0)" : "translateY(-100%)",
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
          <img src={menuButton} alt="menu button" />
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

        <IconButton
          onClick={() => onCloseSidebar()}
          sx={{ display: open ? "inline-flex" : "none" }}
        >
          <img src={cross} alt="close sidebar" />
        </IconButton>

        <IconButton
          to="/shopping_cart"
          component={RouterLink}
          sx={{ display: open ? "none" : "inline-flex" }}
        >
          <img src={basketCase} alt={"shopping cart"} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
