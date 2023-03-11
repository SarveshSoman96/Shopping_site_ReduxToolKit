import { useState } from 'react';
import "./CartProduct.css";

const CartProduct = ({cartItem}) => {
    const [qty, setqty] = useState(1)

    const { id, image, title, price } = cartItem;

  return (
    <>
      <div key={id} className="Cart_Products">
        <div className="Cart_Product_Image">
          <img src={image} alt="" />
        </div>
        <div className="Cart_Products_info">
          <p>{title}</p>
          <p>Price: ${price}</p>
        </div>
        <div className="quantity_buttons">
          <div className="qty_display">
            <input type="text" value={qty} />
          </div>
          <div className="qty_btns">
            <button onClick={() =>  setqty(qty + 1)}>+</button>
            <button onClick={() => { setqty(qty - 1)}} disabled={ qty === 1 ? true : false}>-</button>
          </div>
          <div className="">
            <button>Remove from cart</button>
          </div>
        </div>
        <div className="total_price">
          <p>
            Total Price: <br />
            <span style={{ fontSize: "1.2rem", color: "#725ac1" }}> ${qty * price}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default CartProduct