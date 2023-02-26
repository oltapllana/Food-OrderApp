import { useState } from "react";
import Button from "./Button";
import styled from "./Popup.module.css";
import style from "../Meals.module.css";
import btnStyle from "./Button.module.css";
const Popup = (props) => {
  const [show, setShow] = useState(true);
  const closePopup = () => {
    console.log("closingg");
    setShow(false);
  };
  console.log(props.selectedMeals[0].price);

  const sum = props.selectedMeals
    .map((datum) => datum.amount * datum.price)
    .reduce((a, b) => a + b);
  console.log(sum);

  console.log(props.selectedMeals);
  return (
    <div>
      {show && (
        <div className={styled.background}>
          <ul className={style.meals_container2}>
            {props.selectedMeals.map((meal) => {
              return (
                <li key={meal.id} className={styled.li}>
                  <div className={style.meal_container}>
                    <h3>{meal.name}</h3>
                    <div className={styled.popup__amounts}>
                      <div className={style.meal__price}>{meal.price}</div>
                      <div className={styled.popup__amount}>
                        x {meal.amount}
                      </div>
                    </div>
                  </div>
                </li>
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
