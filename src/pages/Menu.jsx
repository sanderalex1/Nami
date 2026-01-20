import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import Cards from "../Components/Cards";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import circle from "../assets/circle.svg";

const MenuButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "visible",
  color: theme.palette.text.primary,
  fontSize: theme.typography.pxToRem(12),
  fontFamily: "Legajo",
  textTransform: "uppercase",
  lineHeight: "1.05rem",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const categories = ["ramen", "nigiri", "drinks"];

const Menu = () => {
  const { setSurfaceCount } = useOutletContext();
  const [activeCategory, setActiveCategory] = useState("ramen");

  useEffect(() => {
    setSurfaceCount((c) => c + 1);
    return () => setSurfaceCount((c) => c - 1);
  }, []);

  const handleAddToCart = {};

  return (
    <Box
      sx={(theme) => ({
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "2rem",
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
          display: "flex",
          gap: "1rem",
          "& .MuiButtonGroup-grouped": {
            border: "none",
          },
        }}
      >
        {categories.map((cat) => (
          <MenuButton
            key={cat}
            onClick={() => setActiveCategory(cat)}
            sx={{
              fontWeight: activeCategory === cat ? 700 : 400,
            }}
          >
            {/* ACTIVE CIRCLE */}
            {activeCategory === cat && (
              <Box
                component="img"
                src={circle}
                alt=""
                sx={{
                  position: "absolute",
                  top: "-5px", // sits above button
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "74px",
                  height: "33px",
                  zIndex: 1, // ✅ ABOVE button
                  pointerEvents: "none",
                }}
              />
            )}

            {/* BUTTON TEXT */}
            <Box
              component="span"
              sx={{
                position: "relative",
                zIndex: 2, // ✅ ABOVE circle
              }}
            >
              {cat}
            </Box>
          </MenuButton>
        ))}
      </ButtonGroup>
      <Cards handleAddToCart={handleAddToCart} />
    </Box>
  );
};

export default Menu;
