import { useContext, createContext, useState } from "react";

const cartDefaultValue = { items: 9, cartLogger: () => console.log(`carting`) };

const CartContext = createContext(cartDefaultValue);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(0);
  const addToCart = () => setItems((items) => items + 1);
  const removeFromCart = () => setItems((items) => (items > 0 ? items - 1 : 0));
  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
