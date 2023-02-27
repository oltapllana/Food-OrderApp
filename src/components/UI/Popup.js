import { useState } from "react";
import Button from "./Button";
import styled from "./Popup.module.css";
import style from "../Meals.module.css";
import btnStyle from "./Button.module.css";
import CartMeals from "../CartMeals";
const Popup = (props) => {
  const [show, setShow] = useState(true);
  const closePopup = () => {
    console.log("closingg");
    setShow(false);
  };
  const [amo, setAmo] = useState(0);
  const getAmount = (items) => {
    setAmo(items);
  };
  let sum = 0;
  if (props.selectedMeals.length > 0) {
    sum = props.selectedMeals
      .map((datum) => (+datum.amount + +amo) * datum.price)
      .reduce((a, b) => a + b);
    console.log(sum);
  }
  console.log(props.selectedMeals);
  return (
    <div>
      {show && (
        <div className={styled.background}>
          <ul className={style.meals_container2}>
            {props.selectedMeals.map((meal) => {
              return (
                <CartMeals
                  key={meal.id}
                  id={meal.id}
                  name={meal.name}
                  price={meal.price}
                  amount={meal.amount}
                  onSave={getAmount}
                />
              );
            })}

            <div className={styled.popup__totalamount}>
              <h2>Total Amount</h2>
              <span>${sum.toFixed(2)}</span>
            </div>
            <div className={styled.popup__actions}>
              <Button onClick={closePopup} className={btnStyle.popup__close}>
                Close
              </Button>
              <Button>Order</Button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Popup;
