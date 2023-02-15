import { useState } from "react";
import Button from "./Button";
import styled from "./Popup.module.css";
import style from '../Meals.module.css'
const Popup = (props) => {
  const [show, setShow] = useState(true);
  const closePopup = () => {
    console.log("closingg");
    setShow(false);
  };
  console.log(props.selectedMeals);
  return (
    <div>
      {show && (
        <div className={styled.background}>
          <ul className={style.meals_container2}>
            {props.selectedMeals.map(meal => {
            return (<li key={meal.id}>
                  <div className={style.meal_container}>
                    <h3>{meal.name}</h3>
                    <div className={style.meal__description}>
                      {meal.description}
                    </div>
                    <div className={style.meal__price}>{meal.price}</div>
                  </div>
                </li>)})}
                
              
            <Button onClick={closePopup}>Close</Button>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Popup;
