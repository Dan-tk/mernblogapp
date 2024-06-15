import React from 'react'
import { useState } from "react"
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import {URL} from '../../url'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const navigate=useNavigate()

  const handleRegister=async (e)=>{
    e.preventDefault()
    
       try {
         const res = await fetch(URL + "/api/auth/signup", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({ username, email, password })
         });   

         if (!res.ok) {
             throw new Error('Network response was not ok ' + res.statusText);
         }   

         const data = await res.json();
         setUsername(data.username);
         setEmail(data.email);
         setPassword(data.password);
         setError(false);
         navigate("/login");
     } catch (err) {
         setError(true);
         console.log(err);
     }
   };


  return (
    <>
      <div className="sign-up-body relative">
        <Link to="/" className="absolute top-0 left-0 m-4 flex items-center text-gray-500">
          <IoIosArrowBack className="mr-2" />
          Back to Home
        </Link>  
        <div className="yellow-box">
          box-talk <br />
          Sign up 
        </div>

        <div className="sign-up-form-container">
          
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input 
              onChange={(e)=>setUsername(e.target.value)}
              id='username'
              type="text" 
              placeholder="Username" 
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input 
              onChange={(e)=>setEmail(e.target.value)}
              id='email'
              type="text" 
              placeholder="email" 
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              onChange={(e)=>setPassword(e.target.value)}
              id='password'
              type="password" 
              placeholder="password" 
            />
          </div>

          <button onClick={handleRegister} className="button">
            Continue
          </button>
        </div>

      </div>
    </>
  )
}

export default SignUp