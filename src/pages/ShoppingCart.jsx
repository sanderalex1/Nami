import { Box, Container, Divider, Typography } from "@mui/material";
import ShoppingCard from "../Components/ShoppingCard";
import { dishesData } from "../data/data";

const dish = dishesData[0];

const ShoppingCart = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "var(--main-bg)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", maxWidth: "7rem" }}
        >
          shopping cart
        </Typography>
        <ShoppingCard key={dish.id} name={dish.name} picture={dish.picture} />
        <Divider />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Box>
            <Typography variant="h6">subtotal</Typography>
            <Typography variant="h6">delivery</Typography>
          </Box>
          <Typography variant="h6">total</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ShoppingCart;
