import {CheckoutCon,CheckoutHeader,headerBlock,Total} from "./checkout.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item";

const Checkout = () => {
  const { cartItems ,cartTotal } =
    useContext(CartContext);

  return (
    <CheckoutCon>
      <CheckoutHeader>
        <headerBlock>
          <span>Product</span>
        </headerBlock>
        <headerBlock>
          <span>Description</span>
        </headerBlock>
        <headerBlock>
          <span>Quantity</span>
        </headerBlock>
        <headerBlock>
          <span>Price</span>
        </headerBlock>
        <headerBlock>
          <span>Remove</span>
        </headerBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={ cartItem } />
      ))}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutCon>
  );
};

export default Checkout;
