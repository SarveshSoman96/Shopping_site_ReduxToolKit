import "./Product.css";
import { addToCart } from "../../RTK Store/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductInfo } from "../../RTK Store/SingleProductSlice";


const Product = ({product}) => {

  const dispatchAction = useDispatch();
  const { id, title, image ,price  } = product

  const addToCartHandler = (product) => {
        dispatchAction(addToCart(product))
  };

  return (
    <div className="product_details" key={id}>
      <div className="product_image">
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            marginInline: "auto",
          }}
        />
      </div>
      <div className="prod_info_btns">
        <div className="product_info">
          <p>{title}</p>
          <p style={{ margin: "20px 0" }}>Price: ${price}</p>
        </div>
        <div className="action_buttons">
          <Link
            to={`/product/:${id}`}
            className="single_product"
            onClick={(e) => {
              dispatchAction(fetchProductInfo(id))
            }}
          >
            View details &#10230;
          </Link>
          <button
            className="addToCart"
            onClick={(e) => addToCartHandler(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;