import React from 'react'
import Appname from './Appname'
import { Routes, Route } from 'react-router-dom'

import Home from './Components/Home'
import Favorite from './Components/Favorite'
import Order from './Components/Order'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
import "./Components/Style.css"
import Form from './Components/Form'
import Congreates from './Components/Congreates'

const  App=()=> {
  return (
    <div>
      <Appname/>
  
      {
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/favorites' element={<Favorite/>} />
          <Route path='/orders' element={<Order/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/form' element={<Form/>} /> 
          <Route path='/congrates' element={<Congreates/>} />  



    
        </Routes>
      }

      {/* <Home/> */}

      
    </div>
  )
}

export default App
