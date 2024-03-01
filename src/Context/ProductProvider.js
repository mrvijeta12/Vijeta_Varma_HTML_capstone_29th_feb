import { useState } from "react";
import ProductContext from "./ProductContext";

const ProductProvider = ({ children }) => {
const [ fetchProducts,setFetchProducts] = useState(null);
const[cartItems,setCartItems] = useState([])
const [ form,setForm] =  useState(false);
const [checkout,setCheckout] = useState(false)

// console.log(cartItems)

  return (
    <ProductContext.Provider
      value={{
       fetchProducts:fetchProducts,
       setFetchProducts:setFetchProducts,
       cartItems:cartItems,
       setCartItems:setCartItems,
       form:form,
       setForm:setForm,
       checkout:checkout,
       setCheckout:setCheckout,
       
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
