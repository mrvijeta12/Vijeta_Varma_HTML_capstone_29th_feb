import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import ProductContext from "../Context/ProductContext";
import { MdCancel } from "react-icons/md";
import Contact from "./Contact";


const Home = () => {
  const { fetchProducts, setFetchProducts,setCartItems,cartItems} = useContext(ProductContext);

  const [preview, setPreview] = useState([]);
  const [view, setView] = useState(false);
  
  // console.log(cartItems)

  function details(Products) {
    setPreview([{ ...Products }]);
    setView(true);

  }

  function close(){
    setView(false)
  }

  // function addToCart(id) {
  //   const newItems = fetchProducts.map((product) => product.id === id);


  //   setCartItems((existProducts) => [
  //     ...existProducts,
  //     newItems,
  //   ]);
  // }

  function addToCart(pitems){
    setView(true)
    const updateCart = [...cartItems,pitems]
   setCartItems(updateCart)
  //  console.log(cartItems)
  //  setView(true)
  }
  

  async function fetchdata() {
    const resp = await axios.get("https://fakestoreapi.com/products");
    try {
      setFetchProducts(resp);
    } catch (error) {
      console.log(error);
    }
  }
 
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>

{/* // POP OF PRODUCT  */}

      {view && (
        <div className="preview-container">
          <div className="preview-contant">
            {preview &&
              preview.map((pitems,index) => (
                <div className="preview-details" key={index}>
                  <button className="cross" onClick={close}>
                    <MdCancel />
                  </button>
                  <img src={pitems.image} alt="" />
                  <h3>{pitems.title}</h3>
                  <p>{pitems.description}</p>
                  <h4>${pitems.price}</h4>
                  <button onClick={()=>addToCart(pitems)}>Add To Cart</button>
                </div>
              ))}
          </div>
        </div>
      )}



 {/* // PRODUCT RENDER   */}


      <div className="home-container">
        {fetchProducts &&
          fetchProducts.data.map((item, index) => (
            // console.log(item)
            <div key={index} className="home-product-container">
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <h4> ${item.price}</h4>
              <button onClick={() => details(item)}>View</button>
            </div>
          ))}
      </div>
    </div>
  );
};


export default Home
