import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";
import CartProduct from "../../components/CartProduct/CartProduct";
import { getCartTotal } from "../../RTK Store/CartSlice";

const Cart = () => {

  const dispatch = useDispatch()
  const {cart, cartTotal} = useSelector((state) => state.cart);
  
  useEffect(() => {
    dispatch(getCartTotal())

  }, [cart, dispatch])
  

  return (
   
      <div className="cart_container">
        <div className="wrapper">
          <div className="cart_details_block">
            {cart.length === 0 ? (
              <div className="cart_heading">
            
                <h3>Cart looks too light. Shop something</h3>
                <Link to="/">Return to products</Link>
                </div>

            ) : (
            <>
            <div className="cart_heading">
            
              <h3>Your shopping cart</h3>
              <Link to="/">Return to products</Link>
            </div>

            <div className="cart_listing">

              {cart?.map((cartItem) => (
                <CartProduct key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
            <div className="checkout">
                <p>You cart total is: <span>${cartTotal.toFixed(2)}</span> </p>
                <button>CheckOut</button>
            </div>
            </>
            )}
            

          </div>
        </div>
      </div>
  );
};

export default Cart;
