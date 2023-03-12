import { useSelector , useDispatch} from 'react-redux';
import "./SingleProduct.css";
import { addToCart , removeFromCart, getCartTotal} from "../../RTK Store/CartSlice";
import { useEffect } from 'react';
import { cleanUpSingleProduct } from '../../RTK Store/SingleProductSlice';

const SingleProduct = () => {

  const dispatch = useDispatch();
  // const { id } = useParams();

  const { productInfo, loading } = useSelector(state => state.product);
  // const product = JSON.parse(localStorage.getItem("productInfo"))
  const { title, description, price, image, category} = productInfo;
 
  const addToCartHandler = (product) => {
      dispatch(addToCart(product))
      dispatch(getCartTotal())
};  

  const removeFromCartHandler = (item) => {
    // console.log(item)
      dispatch(removeFromCart(item))
      dispatch(getCartTotal())
  };


  useEffect(() => {

    // dispatch(fetchProductInfo(id))  
  
    return () => {
      dispatch(cleanUpSingleProduct())
    }
  })
  
  

    return (
      <>
        <div className="single_product_data">
          <div className="wrapper">

            <div className="data_container">

              {loading ? <h2>Fetching product details for you</h2> : (
                  <>
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
                          onClick={(e) => addToCartHandler(productInfo)}
                        >
                          Add to cart
                        </button>
                        <button className="removefromcart" onClick={(e) => removeFromCartHandler(productInfo)}>Remove From cart</button>
                      </div>
                    </div>
                  </>
              )}
              
            </div>
          </div>
        </div>
      </>
    );
 

}

export default SingleProduct