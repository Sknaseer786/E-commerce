import axios from "axios"
import { useState } from "react"
import React from 'react'
import './Addproduct.css'

export default function AddProduct() {
    const[name,setName]=useState('')
    const[category,setCategory]=useState('')
    const[price,setPrice]=useState('')
    const[description,setDescription]=useState('')
    const[stock,setStock]=useState('')
    const userRole=localStorage.getItem("userRole")
    async function handleaddproduct(){
        
        const newproduct={name,category,price,description,stock,role:userRole}
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/products/add`,newproduct)
            .then((res)=>{console.log(res)})

    }

  return (
    <div add-product-container>
        <div className="form-group">
            <label>Name</label>
            <input value={name} placeholder='Enter product name' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>price</label>
            <input value={price} placeholder='Enter product price' onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>category</label>
            <input value={category} placeholder='Enter product category' onChange={(e)=>setCategory(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>description</label>
            <input value={description} placeholder='Enter product description' onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>stock</label>
            <input value={stock} placeholder='Enter product Stock' onChange={(e)=>setStock(e.target.value)}/>
        </div>
        <div>

             <button onClick={handleaddproduct}>ADD PRODUCT</button>
        </div>
        
        
      
    </div>
  )
}
