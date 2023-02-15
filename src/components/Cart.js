import styled from "./Cart.module.css";
import CartItem from "./CartItem";
import src from "../assets/cart-jpg.png";
const Card = (props) => {

  return (
    <div className={styled.cart_container}>
      <div className={styled.cart_style}>
          <img src={src} alt="shopping cart" />
          <p className={styled.cart__text}>Your Card</p>
          <CartItem meal={props.meal} onPop = {props.onPopItem}></CartItem>
      </div>
    </div>
  );
};
export default Card;
