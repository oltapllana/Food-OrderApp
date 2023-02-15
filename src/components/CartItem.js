import { useState } from 'react'
import styled from './CartItem.module.css'
const CartItem = (props) => {
    const [popup, setPopup] = useState(false)
    const openPopup = () => {
       setPopup(!popup)
       props.onPop(popup)
    }
    return <div className={styled.cartItem}>
        <button onClick={openPopup} className={styled.cart__button}>
            <p>{props.meal}</p>
        </button>
    </div>
}
export default CartItem