import React,{useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const navigate=useNavigate()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  async function login(){
    const user={email,password}
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,user)
      .then((res)=>{console.log(res)
        if(res.status===200){
          navigate('/')
         localStorage.setItem("userRole",res.data.role)
         localStorage.setItem("userId",res.data.userId)
        }
      })
             
    

  }
  return (
    <div className='login-container'>
      <div className='login-container h2'><h2>Login</h2></div>
      <div className='form-group label'>
        <label>E-mail</label>
      </div>
      <div className='form-group input'>
        <input placeholder='Enter E-mail' value={email} onChange={(e) => (setEmail(e.target.value))} />
      </div>
      <div className='form-group label'>
        <label>Password</label>
      </div>
      <div className='form-group input'>  
        <input placeholder='Enter password' value={password} onChange={(e) => (setPassword(e.target.value) )} />
      </div>
      <div className='login-container button'><button onClick={login}>Submit</button></div>
    </div>
  )
}
