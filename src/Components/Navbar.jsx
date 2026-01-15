import { AppBar, Toolbar, Box, IconButton, Typography } from "@mui/material";
import menuButton from "../assets/menuButton.svg";
import basketCase from "../assets/basketCase.svg";
import cross from "../assets/cross.svg";

const Navbar = ({ open, onMenuClick, onCloseSidebar, onOpenBasket }) => {
  const handleIconClick = () => {
    if (open) {
      onCloseSidebar();
    } else {
      onOpenBasket();
    }
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        width: "100vw",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxSizing: "border-box",
        background: open ? "var(--secondary-bg)" : "var(--main-bg)",
        color: "black",
      }}
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
          variant="h4"
          sx={{ whiteSpace: "nowrap", textTransform: "lowercase" }}
        >
          nami
        </Typography>

        <IconButton onClick={handleIconClick}>
          <img src={open ? cross : basketCase} alt="" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
