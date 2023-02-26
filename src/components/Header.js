import styled from './Header.module.css'
import React from 'react'
import src from '../assets/meals.jpg'
import Cart from './Cart'
const Header = (props) =>{
    console.log(props.meal);
    return (
        <React.Fragment>
            <div className={styled.header}>
                <div className={styled.nav}>
                    <a href='/'><h1>ReactMeals</h1></a>
                    <Cart meal={props.meal}  onPopItem={props.onPops}></Cart>
                </div>
                </div>
                <div className={styled.main_image}> <img  src={src} alt="Meals"/></div>
        </React.Fragment>
    )
}
export default Header