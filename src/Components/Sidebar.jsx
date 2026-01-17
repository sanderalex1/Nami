import { Box, Divider, Drawer, Typography } from "@mui/material";
import { useEffect } from "react";

const NAVBAR_HEIGHT = "72px";

const Sidebar = ({ open, onClose }) => {
  const menuList = [
    { number: "01", name: "Home" },
    { number: "02", name: "Menu" },
    { number: "03", name: "Profile" },
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
      transitionDuration={0}
      ModalProps={{
        BackdropProps: {
          invisible: true,
        },
      }}
      sx={{
        "& .MuiDrawer-paper": {
          top: NAVBAR_HEIGHT,
          height: `calc(100% - ${NAVBAR_HEIGHT})`,
          width: "100%",
          backgroundColor: "var(--secondary-bg)",
          boxShadow: "none",
        },
      }}
    >
      <Box
        sx={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          gap: "2rem",
        }}
      >
        {menuList.map(({ number, name }) => (
          <Box
            display="flex"
            flexDirection="column"
            paddingTop="1rem"
            gap="1rem"
            key={number}
          >
            <Typography variant="h7">{number}</Typography>
            <Typography variant="h6">{name.toUpperCase()}</Typography>
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
