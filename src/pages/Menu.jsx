import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import ProductCard from "../components/ProductCard";
import { menu } from "../data";
import { useState } from "react";

function Menu() {
  const [active, setActive] = useState("nigiri");

  const buttons = [
    {
      id: "nigiri",
      label: "Nigiri",
      activeIcon: "nigiri-white.svg",
      disabledIcon: "nigiri.svg",
    },
    {
      id: "rolls",
      label: "Rolls",
      activeIcon: "rolls-white.svg",
      disabledIcon: "rolls.svg",
    },
    {
      id: "ramen",
      label: "Ramen",
      activeIcon: "ramen-white.svg",
      disabledIcon: "ramen.svg",
    },
    {
      id: "drinks",
      label: "Drinks",
      activeIcon: "drinks-white.svg",
      disabledIcon: "drinks.svg",
    },
  ];

  const buttonStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 0.5,
    borderColor: "rgba(0, 0, 0, 0.60)",
    backgroundColor: "#faf8f8",
    borderWidth: "0.8px",
    width: "102px",
    height: "74px",
    font: "var(--font-body)",
    color: "var(--text)",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgba(178, 34, 34, 0.08)",
    },
  };

  return (
    <Box>
      <Grid
        container
        spacing={8}
        justifyContent="center"
        alignItems="center"
        marginTop={4}
        width="95svw"
      >
        {buttons.map(({ id, label, activeIcon, disabledIcon }) => (
          <Button
            key={id}
            onClick={() => setActive(id)}
            size="large"
            variant="outlined"
            sx={{
              ...buttonStyle,
              ...(active === id && {
                backgroundColor: "#B22222",
                color: "white",
                "&:hover": {
                  backgroundColor: "#B22222",
                },
              }),
            }}
          >
            <img src={active === id ? activeIcon : disabledIcon} alt={label} />
            {label}
          </Button>
        ))}
      </Grid>

      <Box
        sx={{
          maxHeight: "70vh",
          overflowY: "auto",
          padding: 2,
          "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari
          scrollbarWidth: "none", // Firefox
        }}
      >
        <Grid
          container
          spacing={4}
          marginTop={4}
          justifyContent="space-between"
          sx={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {menu[active]?.map((product) => (
            <Grid
              item
              marginTop={4}
              xs={12}
              sm={6}
              md={4}
              lg={4}
              key={product.id}
            >
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Menu;
