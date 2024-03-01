import React, { useState } from "react";
import ProductContext from "../Context/ProductContext";
import { useContext } from "react";
import { MdCancel } from "react-icons/md";
import { useEffect } from "react";


const Cart = () => {
  const { cartItems, setCartItems, setForm, checkout } =
    useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState();
 

  const inc = (productId) => {
    setQuantity((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 1) + 1,
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

  function calculateTotal() {
    const total = cartItems.reduce((acc, citems) => {
      return acc + ((quantity[citems.id] || 1) * citems.price);
    }, 0);
    setTotal(total);
  }

 
  useEffect(() => {
    calculateTotal();
  }, [cartItems, quantity]);



  return (
    <div>
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
              <p> {quantity[citems.id] || 1}</p>
              <button onClick={() => inc(citems.id)}>+</button>
              <p>{((quantity[citems.id] || 1) * citems.price).toFixed(2)}</p>

            </div>
          ))}

              <div>
              <p>${(total).toFixed(2)}</p>
              </div>
     
      </div>
    </div>
  );
};

export default Cart;
