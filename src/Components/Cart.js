import React, { useState } from "react";
import ProductContext from "../Context/ProductContext";
import { useContext } from "react";
import { MdCancel } from "react-icons/md";
// import { useSearchParams } from "react-router-dom";

const Cart = () => {
  const { cartItems, setCartItems,setForm } = useContext(ProductContext);

  // console.log(cartItems);
  const [quantity, setQuantity] = useState(1);
 

  const inc = (productId) => {
    setQuantity((prevCounts) => ({ ...prevCounts,[productId]: (prevCounts[productId] || 0) + 1,
    }));
  };
  const dec = (productId) => {
    setQuantity((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 1) - 1,
    }));
  };


  function remove(citemsId) {
    setCartItems((existItems) =>
      existItems.filter((item) => item.id !== citemsId)
    );
  }

  function openForm(){
    setForm(true)
    
  }


  return (
    <div className="cart-container">
      {cartItems &&
        cartItems.map((citems, index) => (
          <div key={index} className="cartitems">
            <button onClick={() => remove(citems.id)}>
              <MdCancel />{" "}
            </button>
            <img src={citems.image} alt="" />
            <p>{citems.title}</p>
            <p>${citems.price}</p>
            <button onClick={() => dec(citems.id)}>-</button>
            <p> {quantity[citems.id] || 0}</p>
            <button onClick={() => inc(citems.id)}>+</button>
            <p>{(quantity[citems.id] * citems.price).toFixed(1)}</p>

            
          </div>

        ))
        }
          <div>
          {
            cartItems && <button className="checkout" onClick={openForm}>Checkout</button>
            
          }
          </div>
    </div>
  );
};

export default Cart;
