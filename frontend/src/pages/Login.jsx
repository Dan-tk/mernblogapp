import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate} from 'react-router-dom';
import { useContext, useState } from "react"
import { URL } from "../../url"
import { UserContext } from "../context/UserContext"

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const {setUser}=useContext(UserContext)
  const navigate=useNavigate()

  const handleLogin=async()=>{
    try{
      const response = await fetch(URL + "/api/auth/login", {
        method: 'POST', // Specifies the HTTP method
        headers: {
          "Content-Type": "application/json", // Tells the server the data format
        },
        credentials: 'include', // This is equivalent to { withCredentials: true } in axios to enable cookies
        body: JSON.stringify({ email, password }), // The data being sent
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      const data = await response.json(); // Parse the JSON response
      setUser(data); 
      navigate("/"); // Navigate to home
    }
    catch(err){
      setError(true)
      console.log(err)

    }

  }
  return (
    <>
    <div className="sign-up-body relative">  
        <Link to="/" className="absolute top-0 right-0 m-4 flex items-center text-gray-500">
          <IoIosArrowBack className="mr-2" />
          Back to Home
        </Link>    

      <div className="sign-up-form-container">
        
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
            placeholder="Username" 
          />
        </div>

        <button onClick={handleLogin} className="button">
          Continue
        </button>
      </div>

      <div className="yellow-box">
        box-talk <br />
        Login 
      </div>

    </div>
  </>
  )
}

export default Login