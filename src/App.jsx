import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Catagories from "./Pages/Catagories/Catagories";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";

function App() {

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
