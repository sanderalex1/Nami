import { Box, Container, Divider, Typography, Button } from "@mui/material";
import ShoppingCard from "../Components/ShoppingCard";
import { dishesData } from "../data/data";
import { currencyFormater } from "../utilities/currencyFormater";
import styled from "@emotion/styled";
import { useCart } from "../context/ShoppingCartContext";

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
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce((total, cartItem) => {
    const item = dishesData.find((dish) => dish.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const deliveryPrice = subtotal > 0 ? 5 : 0;
  const totalPrice = subtotal + deliveryPrice;

  return (
    <Container>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          paddingBottom: "4rem",
          paddingTop: "2rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textTransform: "uppercase",
            maxWidth: "7rem",
            paddingLeft: "1rem",
          }}
        >
          <Box component="span">shopping cart</Box>
          {cartItems.length > 0 && (
            <Box
              component="span"
              sx={{
                fontSize: "0.6em",
                ml: "0.25rem",
              }}
            >
              ({cartItems.length})
            </Box>
          )}
        </Typography>
        {cartItems.length > 0 ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {cartItems.map((cartItem) => {
              const item = dishesData.find((dish) => dish.id === cartItem.id);
              if (item == null) return null;

              return (
                <ShoppingCard
                  key={cartItem.id}
                  id={cartItem.id}
                  name={item.name}
                  picture={item.picture}
                  quantity={cartItem.quantity}
                />
              );
            })}

            <Divider sx={{ height: "0.5px", backgroundColor: "black" }} />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "70%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "0.5rem",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h8">subtotal</Typography>
                    <Typography variant="h7">
                      {currencyFormater(subtotal)}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h8">delivery</Typography>
                    <Typography variant="h7">
                      {currencyFormater(deliveryPrice)}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ fontWeight: 700 }} variant="h6">
                    total
                  </Typography>
                  <Typography variant="h7">
                    {currencyFormater(totalPrice)}
                  </Typography>
                </Box>
                <MenuButton sx={{ p: "0.5rem" }}>
                  <Typography variant="h8">checkout</Typography>{" "}
                </MenuButton>
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
