import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Login = () => {
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
            id='email'
            type="text" 
            placeholder="email" 
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input 
            id='password'
            type="password" 
            placeholder="Username" 
          />
        </div>

        <button className="button">
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