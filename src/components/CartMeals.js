import { useState} from 'react'
import React from 'react';
import styled from "../components/UI/Popup.module.css";
import style from "./Meals.module.css";
const CartMeals = props => {

    const [items, updatedItem] = useState(0)
    const add = () =>{
      updatedItem(items+1)
      props.onSave(items)
    }

    const decrement = () => {
      updatedItem(items-1)
      props.onSave(items)
    }


return(
    <React.Fragment>
        <li key={props.id} className={styled.li}   
>
        <div className={style.meal_container}>
          <h3>{props.name}</h3>
          <div className={styled.popup__amounts}>
            <div className={style.meal__price}>{props.price}</div>
            <div className={styled.popup__amount}>
              x {+props.amount+  + +items}
            </div>
          </div>
        </div>
        <div className={styled.button__plusminus}>
          <button onClick={add}>+</button>
          <button onClick={decrement}>-</button>
        </div>
        </li>
          
    </React.Fragment>
)
}
export default CartMeals