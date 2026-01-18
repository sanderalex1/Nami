import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import Cards from "../Components/Cards";
import { useEffect } from "react";
import styled from "@emotion/styled";

const Menu = () => {
  const { setSurfaceCount } = useOutletContext();

  useEffect(() => {
    setSurfaceCount((c) => c + 1);
    return () => setSurfaceCount((c) => c - 1);
  }, []);

  const handleAddToCart = {};

  const MenuButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(12),
    fontFamily: "Legajo",
    textTransform: "uppercase",
    lineHeight: "1.05rem",
    "&:hover": {
      backgroundColor: "transparent",
    },
  }));

  return (
    <Box
      sx={(theme) => ({
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "1rem",
        gap: "0.5rem",
        background: "var(--secondary-bg)",
        height: "100%",
      })}
    >
      <Typography
        variant="h6"
        sx={{ textTransform: "uppercase", fontWeight: 700 }}
      >
        the dishes
      </Typography>
      <ButtonGroup
        variant="text"
        aria-label="Basic button group"
        sx={{
          "& .MuiButtonGroup-grouped": {
            border: "none",
          },
        }}
      >
        <MenuButton>Ramen</MenuButton>
        <MenuButton>Nigiri</MenuButton>
        <MenuButton>Drinks</MenuButton>
      </ButtonGroup>
      <Cards handleAddToCart={handleAddToCart} />
    </Box>
  );
};

export default Menu;
