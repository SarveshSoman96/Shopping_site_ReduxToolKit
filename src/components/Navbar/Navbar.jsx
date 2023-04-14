import { NavLink , Link} from 'react-router-dom';
import { useSelector , useDispatch} from "react-redux";
import "./Navbar.css";
import CartItems from '../CartItems/CartItems';

const Navbar = () => {

  // const cartItems = useSelector(state => state.cart.totalQty)

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

          <ul className='navList'>
            <li style={{display: "inline-block", marginLeft: "1rem"}}>
              <NavLink to="/" style={navMenuStyle}>Home</NavLink>
            </li>
            <li style={{display: "inline-block", marginLeft: "1rem"}}>
              <NavLink to="/shoppingcart" style={navMenuStyle}>Cart</NavLink>
            </li>
            <CartItems />
   
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;