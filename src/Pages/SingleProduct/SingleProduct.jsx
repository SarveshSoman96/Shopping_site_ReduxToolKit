import { useSelector , useDispatch} from 'react-redux';
import "./SingleProduct.css";
import { addToCart , removeFromCart} from "../../RTK Store/CartSlice";

const SingleProduct = () => {

  const dispatch = useDispatch();

  const state = useSelector(state => state.product.productInfo);
  const loading = useSelector(state => state.product);
 
  const addToCartHandler = (product) => {
      dispatch(addToCart(product))
};

  const removeFromCartHandler = (productData) => {
      dispatch(removeFromCart(productData))
  };

    return (
      <>
        <div className="single_product_data">
          <div className="wrapper">
            <div className="data_container">
              <div className="product_image_block">
                <img src={state.image} alt="" />
              </div>
              <div className="product_full_info_container">
                <h1>{state.title}</h1>
                <p>{state.description}</p>
                <p>{state.category}</p>
                <p>${state.price}</p>

                <div className="btns_container">
                  <button
                    className="addToCart"
                    onClick={(e) => addToCartHandler(state)}
                  >
                    Add to cart
                  </button>
                  <button className="removefromcart" onClick={(e) => removeFromCartHandler(state.id)}>Remove From cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
 

}

export default SingleProduct