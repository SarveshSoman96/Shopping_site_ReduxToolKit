import { useSelector , useDispatch} from 'react-redux';
import "./SingleProduct.css";
import { addToCart , removeFromCart} from "../../RTK Store/CartSlice";
// import { cleanUpSingleProduct } from '../../RTK Store/SingleProductSlice';

const SingleProduct = () => {

  const dispatch = useDispatch();
  const stateData = useSelector(state => state.product);
 
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
                <img src={stateData.productInfo.image} alt="" />
              </div>
              <div className="product_full_info_container">
                <h1>{stateData.productInfo.title}</h1>
                <p>{stateData.productInfo.description}</p>
                <p>{stateData.productInfo.category}</p>
                <p>${stateData.productInfo.price}</p>
                <p>
                  {stateData.productInfo.rating.rate}/
                  {stateData.productInfo.rating.count} Ratings
                </p>

                <div className="btns_container">
                  <button
                    className="addToCart"
                    onClick={(e) => addToCartHandler(stateData)}
                  >
                    Add to cart
                  </button>
                  <button className="removefromcart" onClick={(e) => removeFromCartHandler(stateData.id)}>Remove From cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}

export default SingleProduct