import { useState } from "react";
import Button from "./Button";
import styled from "./Popup.module.css";
import style from "../Meals.module.css";
import btnStyle from './Button.module.css'
const Popup = (props) => {
  const [show, setShow] = useState(true);
  const closePopup = () => {
    console.log("closingg");
    setShow(false);
  };
  console.log(props.selectedMeals[0].price);

  const sum = props.selectedMeals.map(datum => datum.amount * datum.price).reduce((a, b) => a + b)
  console.log(sum);
 
 

  console.log(props.selectedMeals);
  return (
    <div>
      {show && (
        <div className={styled.background}>
          <ul className={style.meals_container2}>
            {props.selectedMeals.map((meal) => {
              return (
                <li key={meal.id}>
                  <div className={style.meal_container}>
                    <h3>{meal.name}</h3>
                    <div className={style.meal__price}>{meal.price}</div>
                  </div>
                  <div className={`${style.line} ${style.line__pop}`}></div>

                </li>

              );
            })}
            <div className={styled.popup__actions}>
              <div><h2>Total Amount</h2> {sum}</div>
              <Button onClick={closePopup} className={btnStyle.popup__close}>Close</Button>
              <Button>Order</Button>
            </div>

          </ul>
        </div>
      )}
    </div>
  );
};
export default Popup;
