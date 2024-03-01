import React, { useContext } from "react";
import ProductContext from "../Context/ProductContext";
import { Link } from "react-router-dom";

const Form = () => {
  // const{form,setForm} = useContext(ProductContext)
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" required />

        <label htmlFor="email">Email</label>
        <input type="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" required />

        <label htmlFor="number">Mob No:</label>
        <input type="number" />


        <Link to="/congrates">
        <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
