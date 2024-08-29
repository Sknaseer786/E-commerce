import React,{useState} from 'react'

export default function Input() {
    const[userName,setUserName]=useState('')
    function Submit(){
        console.log("hai naseer",userName)

    }
    function handlechange(e){
        //console.log(e.target.value)
        setUserName(e.target.value)
    }
  return (
    <div>
        <input onChange={handlechange} placeholder='Enter your name'/>
        <button onClick={Submit}>submit</button>
      
    </div>
  )
}
