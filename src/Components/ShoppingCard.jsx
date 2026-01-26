import { Box, Container, Typography } from "@mui/material";
import { useCart } from "../context/ShoppingCartContext";

const ShoppingCard = ({ name, picture, quantity, id }) => {
  const { increaseItemQuantity, decreaseItemQuantity } = useCart();
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Box
          sx={{
            width: "10rem",
            height: "12rem",
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

        <Box>
          <Typography variant="h6">{name}</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <Typography variant="h6" onClick={() => increaseItemQuantity(id)}>
              +
            </Typography>
            <Typography variant="h6">{quantity}</Typography>
            <Typography variant="h6" onClick={() => decreaseItemQuantity(id)}>
              -
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ShoppingCard;
