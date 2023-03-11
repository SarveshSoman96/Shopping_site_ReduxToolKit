import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {

  const cartItems = useSelector(state => state.cart)

  return (
    <div className="navbar_container">
      <div className="wrapper">
        <div className="nav_block">
          <h2 style={{fontStyle: "italic"}}>
            <Link to="/" style={{color: "#fff"}}>Fake Shop Stop</Link>
          </h2>

          <ul style={{ marginLeft: "auto" }}>
            <li style={{display: "inline-block", marginLeft: "1rem"}}>
              <Link to="/" style={{color: "#fff"}}>Home</Link>
            </li>
            <li style={{display: "inline-block", marginLeft: "1rem",}}>
              <Link to="/productscatagories" style={{color: "#fff"}}>Catagories</Link>
            </li>
            <li style={{display: "inline-block", marginLeft: "1rem"}}>
              <Link to="/shoppingcart" style={{color: "#fff"}}>Cart</Link>
            </li>
            <li style={{display: "inline-block", marginLeft: "1rem", color: "#fff"}}>
              <b>Cart Items: {cartItems.length}</b>
            </li>
   
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;