import { Box, Divider, Drawer, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = ({ open, onClose }) => {
  const navigationList = [
    { number: "01", name: "Home", link: "/" },
    { number: "02", name: "Menu", link: "menu" },
    { number: "03", name: "Profile", link: "profile" },
  ];

  useEffect(() => {
    document.body.style.overflow = "unset";
    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      disableScrollLock
      variant="temporary"
      transitionDuration={0}
      ModalProps={{
        BackdropProps: {
          invisible: true,
        },
      }}
      sx={{
        "& .MuiDrawer-paper": {
          top: 0,
          backgroundImage: `url(${import.meta.env.BASE_URL}home.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          boxShadow: "none",
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          gap: "2rem",
        }}
      >
        {navigationList.map(({ number, name, link }) => (
          <Box
            display="flex"
            flexDirection="column"
            paddingTop="1rem"
            gap="1rem"
            key={number}
          >
            <Typography variant="h7">{number}</Typography>
            <Typography
              variant="h6"
              component={RouterLink}
              to={link}
              onClick={onClose}
              sx={{
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {name.toUpperCase()}
            </Typography>
            <Divider
              sx={{
                height: 1.1,
                backgroundColor: "black",
              }}
            />
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
