import { Route, Routes } from "react-router-dom";
import './App.css';
import {useEffect} from "react";
import Navbar from './components/Navbar/Navbar';
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Catagories from "./Pages/Catagories/Catagories";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import { useDispatch } from "react-redux";
import { fetchAllProduct } from "./RTK Store/CartSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProduct())

  }, [])
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shoppingcart" element={<Cart/>}/>
        <Route path="/product/:id" element={<SingleProduct />}/>
        <Route path="/productscatagories" element={<Catagories />}/>
      </Routes>
    </div>
  )
}

export default App
