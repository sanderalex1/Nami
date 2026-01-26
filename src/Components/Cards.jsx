import { Box } from "@mui/material";
import Card from "./Card";
import { dishesData } from "../data/data";

const Cards = ({ handleAddToCart }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
        px: "1rem",
        marginTop: "3rem",
      }}
    >
      {dishesData.map((dish, index) => (
        <Card
          key={dish.id}
          {...dish}
          reverse={index % 2 !== 0}
          onAddToCart={() => handleAddToCart(dish.id)}
        />
      ))}
    </Box>
  );
};

export default Cards;
