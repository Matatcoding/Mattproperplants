import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addPlant = (plant) => {
    setCart((cartArray) => {
      const exists = cartArray.find((item) => item.id === plant.id);
      if (exists) {
        return cartArray.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...cartArray, { ...plant, quantity: 1 }];
      }
    });
  };

  const removePlant = (plant) => {
    setCart((cartArray) =>
      cartArray
        .map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addPlant, removePlant }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
