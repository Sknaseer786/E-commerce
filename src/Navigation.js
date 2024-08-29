import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import { useNavigate } from 'react-router-dom'

export default function Navigation() {
  const navigate=useNavigate()
  const userId=localStorage.getItem("userId")
  const userRole=localStorage.getItem("userRole")
  function handlelogout(){
    
    console.log("logout-successful")
    localStorage.removeItem("userId")
    localStorage.removeItem("userRole")
    navigate('/')
  }
  return (
    <nav>
      <Link to="/" >Home</Link>
      {
        userId?(
          
          <>
          {userRole==="admin" && <Link to="/add-product">AddProduct</Link>}
            <Link to="/cart">Cart</Link>
            <Link onClick={handlelogout} >Logout</Link>
          </>
                  
         ):(
          <>
            <Link to="/Signup" >Signup</Link>
            <Link to="/Login" >Login</Link>
          </>
        )
      }     

    </nav>
       
  )
} 
