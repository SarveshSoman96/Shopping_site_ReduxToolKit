import { NavLink , Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {

  const cartItems = useSelector(state => state.cart.totalQty)

  const navMenuStyle = ({isActive}) => {
    return{
      fontWeight: isActive ? "700" : "400",
      color: "#fff"
    }

  };

  return (
    <div className="navbar_container">
      <div className="wrapper">
        <div className="nav_block">
          <h2 style={{fontStyle: "italic"}}>
            <Link to="/" style={{color: "#fff"}}>Fake Shop Stop</Link>
          </h2>

          <ul style={{ marginLeft: "auto" }}>
            <li style={{display: "inline-block", marginLeft: "1rem"}}>
              <NavLink to="/" style={navMenuStyle}>Home</NavLink>
            </li>
            <li style={{display: "inline-block", marginLeft: "1rem",}}>
              <NavLink to="/productscatagories" style={navMenuStyle}>Catagories</NavLink>
            </li>
            <li style={{display: "inline-block", marginLeft: "1rem"}}>
              <NavLink to="/shoppingcart" style={navMenuStyle}>Cart</NavLink>
            </li>
            <li style={{display: "inline-block", marginLeft: "1rem", color: "#fff"}}>
              <b>Cart Items: {cartItems}</b>
            </li>
   
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;