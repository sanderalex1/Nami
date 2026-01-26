import { createContext, useContext, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage";

const ShoppingCartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseItemQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseItemQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const value = useMemo(
    () => ({
      cartItems,
      getItemQuantity,
      increaseItemQuantity,
      decreaseItemQuantity,
      removeItemFromCart,
      cartQuantity,
    }),
    [cartItems],
  );

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}
