
import React,{useState} from 'react'
import './Signup.css'

import axios from 'axios'
import {useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate=useNavigate()
    const[name,setName]=useState('')
    const[mobile,setMobile]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState()
    console.log(process.env.REACT_APP_BACKEND_URL)
    function signup(){
        const newUser={name,mobile,password,email}
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`,newUser)
        
            .then((res)=>{console.log(res)
                if(res.status===201){
                    navigate('/Login')
                }
                else if(res.status===400){
                    console.log("User already exists")
                }
            })
    }
  return (
    <div className='signup-container'>
        <div className='form-group'>
            <label>Name</label>
            <input placeholder="Enter Your Name" value={name} onChange={(e)=>(setName(e.target.value))}  />
        </div>
        <div className='form-group'>
            <label>mobile</label>
            <input placeholder="Enter Your number" value={mobile} onChange={(e)=>(setMobile(e.target.value))}  />
        </div>
        <div className='form-group'>
            <label>email</label>
            <input placeholder="Enter Your mail id" value={email} onChange={(e)=>(setEmail(e.target.value))}  />
        </div>
        <div className='form-group'>
            <label>password</label>
            <input placeholder="Enter Your password" value={password} onChange={(e)=>(setPassword(e.target.value))}  />
        </div> 
        <div> <button onClick={signup}>Submit</button></div>
       
      
    </div>
  )
}
