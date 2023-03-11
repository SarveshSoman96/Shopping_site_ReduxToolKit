import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from '../../components/Product/Product';
import "./Cart.css";
import CartProduct from '../../components/CartProduct/CartProduct';


const Cart = () => {

  const Cart = useSelector(state => state.cart)

  return (
    <>
      <div className="cart_container">
        <div className="wrapper">
          <div className="cart_details_block">
            <div className="cart_heading">
        
                {Cart.length > 0 ? (
                  <h3>Products in cart</h3>
                ) : (
                  <h3>Cart looks too light. Shop something</h3>
                )}

              <Link to="/">Return to products</Link>
            </div>
            <div className="cart_listing">
                {
                  Cart.map(cartItem => (
                    <CartProduct key={cartItem.id} cartItem={cartItem} />
                  ))
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart