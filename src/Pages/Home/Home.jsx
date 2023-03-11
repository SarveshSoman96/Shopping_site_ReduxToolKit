import { useEffect, useState } from 'react';
import "./Home.css";
import Product from "../../components/Product/Product";
import Loading from '../../components/Loading/Loading';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const productData = async () => {
    await fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(res => {
      setProducts(res)
      setLoading(false)
    })
  };

  useEffect(() => {
    productData()
    
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
      loading ? <Loading /> : (
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