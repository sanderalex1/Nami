import { Box, Typography, Button } from "@mui/material";
import { currencyFormater } from "../utilities/currencyFormater";

const Card = ({ name, description, picture, price, reverse, onAddToCart }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      <Box
        sx={{
          width: "12rem",
          height: "10rem",
          border: "1.5px solid",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={picture}
          alt={name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
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
        <Typography variant="h5">{currencyFormater(price)}</Typography>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{description}</Typography>

        <Button
          variant="outlined"
          sx={{
            mt: "0.75rem",
            maxWidth: "8rem",
            fontSize: "0.75rem",
            borderColor: "black",
            borderRadius: 0,
            color: "black",
            px: "1.75rem",
            py: "0.125rem",
            textTransform: "lowercase",
          }}
          onClick={onAddToCart}
        >
          add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
