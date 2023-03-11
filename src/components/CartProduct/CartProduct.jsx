import { useDispatch } from "react-redux";
import "./CartProduct.css";
import { decreaseItemQuantity, addToCart, removeFromCart} from '../../RTK Store/CartSlice';

const CartProduct = ({cartItem}) => {
    const dispatch = useDispatch();

    const { id, image, title, price , productQty} = cartItem;

  return (
    <>
      <div key={id} className="Cart_Products">
        <div className="prod_img_name">
          <div className="Cart_Product_Image">
            <img src={image} alt="" />
          </div>
          <div className="Cart_Products_title">
            <p>{title}</p>
          </div>
        </div>
        <div className="Cart_Products_price">
            <p>Price: ${price}</p>
        </div>
        <div className="quantity_buttons">
          <div className="qty_btns">
            <button onClick={() => dispatch(addToCart(cartItem))}>+</button>
            <span>{productQty}</span>
            <button onClick={() => dispatch(decreaseItemQuantity(cartItem))}>-</button>
          </div>
          <div>
            <button className="removecartbtn" onClick={() => dispatch(removeFromCart(cartItem))}>Remove from cart</button>
          </div>
        </div>
        <div className="total_price">
          <p>
            Total Price: <br />
            <span style={{ fontSize: "1.2rem", color: "#725ac1" }}> ${productQty * price}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default CartProduct