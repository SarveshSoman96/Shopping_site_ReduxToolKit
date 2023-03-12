import {useSelector} from 'react-redux'
import { getCartTotal } from '../../RTK Store/CartSlice'

const CartItems = () => {

  const cartItems = useSelector(state => state.cart.totalQty)
    
  return (
    <>
             <li style={{display: "inline-block", marginLeft: "1rem", color: "#fff"}}>
              <b>Cart Items: {cartItems}</b>
            </li>
    </>
  )
}

export default CartItems