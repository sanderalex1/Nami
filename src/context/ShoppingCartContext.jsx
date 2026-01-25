import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState();
  return (
    <ShoppingCartContext.Provider>{children}</ShoppingCartContext.Provider>
  );
}

export function useCart() {
  return useContext(ShoppingCartContext);
}
