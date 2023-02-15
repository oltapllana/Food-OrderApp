import { useState } from "react";
import styled from "./Meals.module.css";
import Button from "./UI/Button";
const Meals = (props) => {
  const [meal, setMeal] = useState(0)

  const getAmount = (event) => {
    console.log(event.target.value);
    setMeal(event.target.value)
  }
  const addMeal = (event) => {
    event.preventDefault();
    console.log(event);
    props.onGetMeal(meal)
  }
  return (
    <ul className={styled.meals_container}>
      {props.meals.map((meal) => {
        return (
          <li  key={meal.id}>
            <form onSubmit={addMeal}>
              <div className={styled.meal_container}>
                  <h3>{meal.name}</h3>
                  <div className={styled.meal__description}>{meal.description}</div>
                  <div className={styled.meal__price}>{meal.price}</div>
              </div>
              <div className={styled.meal__actions}>
                  <div>
                      <label>Amount</label>
                      <input type='number' number={meal} step={1} min={0} onChange={getAmount} />
                  </div>
                  <Button type='submit'>+ Add</Button>
              </div>
            </form>
          </li>
        );
      })}
    </ul>
  );
};
export default Meals;
