import Meals from "./components/Meals";
import MealsSummary from "./components/MealsSummary";
import Header from './components/Header'
import {  useState } from "react";
import Popup from "./components/UI/Popup";
const DUMMY_MEALS = [
  {
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.9,
    amount: 0,
    id: '1',
  },
  {
    name: "Schnitzel",
    description: "A german speciality",
    price: 16.5,
    amount: 0,
    id: '2',
  },
  {
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    amount: 0,
    id: '3',
  },
  {
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    amount: 0,
    id: '4',
  },
];

function App() {
  const [enterMeal, setEnterMeal] = useState(0)
  const [openPopup, setOpenPopup] = useState(false)
  const [meals, setMeals] = useState([])
  const getMeal = (enteredMeal, enteredMealItem) => {
    setEnterMeal(+enterMeal + +enteredMeal)
    setMeals([enteredMealItem , ...meals])
  }
  console.log(meals);
  console.log(enterMeal);
  const getPop = (enteredPop) =>{
    console.log(enteredPop);

    setOpenPopup(enteredPop)
  }
 
  return (
    <div>
      <Header meal={enterMeal} onPops ={getPop}></Header>
      {openPopup && <Popup selectedMeals={meals}></Popup>}
      <MealsSummary></MealsSummary>
      <Meals meals={DUMMY_MEALS} onGetMeal={getMeal}></Meals>

    </div>
  );
}

export default App;
