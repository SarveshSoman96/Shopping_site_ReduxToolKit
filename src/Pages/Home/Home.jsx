import { useEffect, useState } from 'react';
import "./Home.css";
import Product from "../../components/Product/Product";
import Loading from '../../components/Loading/Loading';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from '../../RTK Store/CartSlice';

const Home = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(state => state.cart)
  // const [loading, setLoading] = useState(true);


  useEffect(() => {

      dispatch(fetchAllProduct())
  }, [])

  return (
    <>
    {/* banner */}
      <div className='home_container'>
        <div className="wrapper">
          <div className="banner_container">
            <h1>Welcome To Fake Shop </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et voluptatem nihil totam est. Error distinctio ipsam necessitatibus est cupiditate deserunt reiciendis sed dolore labore explicabo fugit eius ducimus. </p>
          </div>
        </div>
      </div>
    
    {/* produc list */}
      
    {
      loading ? <Loading /> : error ? (
        <h2>Someting error occured. </h2>
      ) : ( 
        <div className="products_listing_container">
          <div className="wrapper">
            <div className="product_grid">
                { products.map( product => (
                  <Product key={product.id} product={product} />
                )) }
            </div>
          </div>
        </div>
      )
    }
    
      
      
  
    </>
  )

}

export default Home;