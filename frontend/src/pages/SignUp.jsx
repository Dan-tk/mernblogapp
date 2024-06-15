import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
              id='username'
              type="text" 
              placeholder="Username" 
            />
          </div>
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
              placeholder="password" 
            />
          </div>

          <button className="button">
            Continue
          </button>
        </div>

      </div>
    </>
  )
}

export default SignUp