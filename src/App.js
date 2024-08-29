import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import AddProduct from './Addproduct/AddProduct'
import Home from './Home/Home'


export default function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>

        
       
      </Routes>


    </BrowserRouter>

  )
}


// import { useState } from "react"

// import Props from './Props'
// import List from "./List"
// import Input from "./Input"
// import Vechile from "./Vechile"
// function App(){
//   const[name,setName]=useState("Nasiroddin")
//   const[year,setYear]=useState(2017)
//   return(
//     <div>
//       {/* <Input/> */}
//       {/* <List/> */}
//       <Vechile/>
//       {/* <h1>Welcome To ReactApplication</h1>
//       <p>{name} birthday year was {year}</p>
//       <Props studentName="Nasiroddinsk" studentYear="2023"/>
//       <Props studentName="Naveen" studentYear="2023"/> */}

//     </div>
//   )
// }
//export default App