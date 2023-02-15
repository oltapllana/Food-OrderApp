import styled from './Meals.module.css'
import { useState } from 'react'
import Button from './UI/Button'
const MealsItem = (props) => {
    const [meal, setMeal] = useState(0)

    const getAmount = (event) => {
      console.log(event.target.value);
      setMeal(event.target.value)
    }
    const addMeal = (event) => {
      event.preventDefault();
      console.log(event);
      const updatedArr = {
        name: props.name,
        description: props.description,
        price: props.price,
        id: props.id,
        amount: meal
      }

      props.onGetMeal(meal, updatedArr)
     
    }
    return(
        <li >
            <form onSubmit={addMeal}>
              <div className={styled.meal_container}>
                  <h3>{props.name}</h3>
                  <div className={styled.meal__description}>{props.description}</div>
                  <div className={styled.meal__price}>{props.price}</div>
              </div>
              <div className={styled.meal__actions}>
                  <div>
                      <label>Amount</label>
                      <input type='number' number={meal} step={1} min={0} onChange={getAmount} />
                  </div>
                  <Button type='submit' >+ Add</Button>
              </div>
            </form>
          </li>
    )
    
}
export default MealsItem