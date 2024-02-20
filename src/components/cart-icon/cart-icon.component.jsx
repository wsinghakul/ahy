

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { ShoppingIcon,CartIconContainer,ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  console.log(isCartOpen)
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      {console.log(isCartOpen)}
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
