import styled from "./Meals.module.css";
import MealsItem from "./MealsItem";
const Meals = (props) => {
 
  return (
    <ul className={styled.meals_container}>
      {props.meals.map((meal) => {
        return (
          <MealsItem key={meal.id}
          name={meal.name}
          id={meal.id}
          description = {meal.description}
          price = {meal.price}
          onGetMeal ={props.onGetMeal}
        />
        );
      })}
    </ul>
  );
};
export default Meals;
