import React, { useContext } from 'react'
import ProductContext from '../Context/ProductContext'

const Form=()=> {
    const{form,setForm} = useContext(ProductContext)
  return (
    <div>

{
    form && (

        <form >
<label htmlFor="name">Name</label>
<input type="text" required />

<label htmlFor="email">Email</label>
<input type="email" required />

<label htmlFor="password">Password</label>
<input type="password" required />

<label htmlFor="number">Mob No:</label>
<input type="number" />

<button type='submit'>Submit</button>
        </form>
    )
}

      
    </div>
  )
}

export default Form
