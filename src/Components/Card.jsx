import { Height } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const dishesData = [
  {
    name: "shoyu ramen",
    description: "noodles, pork, soft-boiled, eggs, bamboo shoots",
    picture: "ramen.jpg",
    price: "$12",
  },
  {
    name: "matcha",
    description: "matcha powder, water",
    picture: "matcha.jpg",
    price: "$10",
  },
  {
    name: "amaebi nigiri",
    description: "sweet shrimps, rice",
    picture: "sushi.png",
    price: "$8",
  },
];

const Card = () => {
  return (
    <Box>
      {dishesData.map(({ name, description, picture, price }, index) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse", // 🔥
          }}
        >
          <Box sx={{ width: "8.75rem", height: "11.6rem" }}>
            <Box
              component="img"
              src={picture}
              alt={name}
              sx={{
                width: "100%",
                height: "93%",
                objectFit: "contain",
                border: "1.5px solid",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "0.25rem",
            }}
          >
            <Typography variant="h5">{price}</Typography>
            <Typography variant="body1">{name}</Typography>
            <Typography variant="body2">{description}</Typography>

            <Button
              variant="outlined"
              sx={{
                mt: "0.75rem",
                maxWidth: "8rem",
                fontSize: "0.75rem",
                borderColor: "black",
                borderRadius: "0",
                color: "black",
                padding: "0.125rem 1.75rem",
                textTransform: "lowercase",
              }}
            >
              add to cart
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Card;
