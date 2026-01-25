import {
  Badge,
  Box,
  Container,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import ShoppingCard from "../Components/ShoppingCard";
import { dishesData } from "../data/data";
import { currencyFormater } from "../utilities/currencyFormater";
import styled from "@emotion/styled";

const dish = dishesData[0];

let price = 10;

let quantity = 1;

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
  border: "1px solid black",
  borderRadius: "0",
}));

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
          <Box component="span">shopping cart</Box>
        </Typography>
        {quantity >= 1 ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            <ShoppingCard
              key={dish.id}
              name={dish.name}
              picture={dish.picture}
              quantity={quantity}
            />

            <Divider
              sx={{
                height: "1px",
                backgroundColor: "black",
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "70%",
                }}
              >
                <Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h6">subtotal</Typography>
                    <Typography variant="h5">
                      {currencyFormater(price)}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h6">delivery</Typography>
                    <Typography variant="h5">
                      {currencyFormater(price)}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h6">total</Typography>
                  <Typography variant="h5">
                    {currencyFormater(price)}
                  </Typography>
                </Box>
                <MenuButton sx={{ p: "0.5rem" }}>checkout</MenuButton>
              </Box>
            </Box>
          </Box>
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Try something from our menu!
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default ShoppingCart;
