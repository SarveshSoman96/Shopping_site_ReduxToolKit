import { useSelector, useDispatch } from "react-redux";
import "./SingleProduct.css";
import {
  addToCart,
  removeFromCart,
  getCartTotal,
} from "../../RTK Store/CartSlice";
import { useEffect } from "react";
import { cleanUpSingleProduct } from "../../RTK Store/SingleProductSlice";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const dispatch = useDispatch();

  const { productInfo, loading } = useSelector((state) => state.product);
  // const product = JSON.parse(localStorage.getItem("productInfo"));
  const { title, description, price, image, category } = productInfo;

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    dispatch(getCartTotal());
  };

  const removeFromCartHandler = (item) => {
    // console.log(item)
    dispatch(removeFromCart(item));
    dispatch(getCartTotal());
  };

  useEffect(() => {
    // dispatch(fetchProductInfo(id))

    return () => {
      dispatch(cleanUpSingleProduct());
    };
  }, []);

  return (
    <>
      <div className="single_product_data">
        <div className="wrapper">
          <div className="data_container">
            {loading ? (
              <h2>Fetching product details for you</h2>
            ) : (
              <>
                <div className="goback_btn" style={{paddingBottom: "2rem", borderBottom: "1px solid #725ac1"}}>
                    <Link to="/" className="go_back_link">Go Back</Link>
                </div>
                <div className="product_info_wrapper">
                  <div className="product_image_block">
                    <img src={image} alt="" />
                  </div>
                  <div className="product_full_info_container">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>{category}</p>
                    <p>${price}</p>

                    <div className="btns_container">
                      <button
                        className="addToCart"
                        onClick={(e) => addToCartHandler(product)}
                      >
                        Add to cart
                      </button>
                      <button
                        className="removefromcart"
                        onClick={(e) => removeFromCartHandler(product)}
                      >
                        Remove From cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
