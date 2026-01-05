import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useState } from "react";

function Menu() {
  const [active, setActive] = useState("Nigiri");

  const buttons = [
    {
      name: "Nigiri",
      activeIcon: "nigiri-white.svg",
      disabledIcon: "nigiri.svg",
    },
    {
      name: "Rolls",
      activeIcon: "rolls-white.svg",
      disabledIcon: "rolls.svg",
    },
    { name: "Ramen", activeIcon: "ramen-white.svg", disabledIcon: "ramen.svg" },
    {
      name: "Drinks",
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
    <>
      <Grid
        container
        spacing={8}
        justifyContent="center"
        alignItems="center"
        marginTop={4}
        width="95svw"
      >
        {buttons.map(({ name, activeIcon, disabledIcon }) => (
          <Button
            key={name}
            onClick={() => setActive(name)}
            size="large"
            variant="outlined"
            sx={{
              ...buttonStyle,
              ...(active === name && {
                backgroundColor: "#B22222",
                color: "white",
                "&:hover": {
                  backgroundColor: "#B22222",
                },
              }),
            }}
          >
            <img src={active === name ? activeIcon : disabledIcon} alt={name} />
            {name}
          </Button>
        ))}
      </Grid>
    </>
  );
}

export default Menu;
