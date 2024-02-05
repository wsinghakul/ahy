import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  console.log(isCartOpen)
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon classname="shopping-icon" />
      {console.log(isCartOpen)}
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
