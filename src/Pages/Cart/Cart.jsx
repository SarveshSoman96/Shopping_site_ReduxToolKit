import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import CartProduct from "../../components/CartProduct/CartProduct";
import { getCartTotal, clearCart } from "../../RTK Store/CartSlice";
import CheckOutModal from "../../components/CheckOutModal/CheckOutModal";

const Cart = () => {
  
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()
  const {cart, cartTotal} = useSelector((state) => state.cart);
  // const cartProducts = JSON.parse(localStorage.getItem("cart"))
  // const { title, description, price, image, category} = cartProducts;
  
  useEffect(() => {

    dispatch(getCartTotal())

  }, [cart, dispatch])
  
  const modalOpenHandler = (e) => {
    setModalOpen(prev => !prev)
    dispatch(clearCart())
  };

  const modalCloseHandler = () => {
    setModalOpen(prev => !prev)
    navigate("/")
  };

  return (
    <>
      {modalOpen && <CheckOutModal onClose={modalCloseHandler} />}
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
                <button onClick={modalOpenHandler}>CheckOut</button>
            </div>
            </>
            )}
            

          </div>
        </div>
      </div>
      </>
  );
};

export default Cart;
