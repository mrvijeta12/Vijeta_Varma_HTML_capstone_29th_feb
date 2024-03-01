import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ProductContext from "./Context/ProductContext";


const Appname = () => {
  const{cartItems} = useContext(ProductContext)
  return (
    <div className="appname">
      <h1>BestBuy</h1>

      <div className="navlink">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart">Cart </NavLink>
        {/* <NavLink to="/form"></NavLink> */}


      </div>
    </div>
  );
};

export default Appname;
