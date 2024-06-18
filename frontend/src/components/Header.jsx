import React from 'react'
import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { FcMms } from "react-icons/fc";
import { FaCirclePlus } from "react-icons/fa6"
import boxTalkLogo from '../../public/box-talk.svg'
import { CgDetailsMore } from "react-icons/cg";
import { UserContext } from "../context/UserContext"
import { URL } from '../../url';


const Header = () => {

  const {user}=useContext(UserContext)
  const {setUser}=useContext(UserContext)
  const navigate=useNavigate() 
  
  const handleLogout=async()=>{
    try {
      // Send a GET request to the server to logout the user
      const res = await fetch(URL + '/api/auth/logout', { 
        method: 'GET', 
        credentials: 'include' //include cookies in the request
      });
  
      if (!res.ok) {
        throw new Error('Failed to logout');
      }
  
      setUser(null);
      // Navigate to the login page
      navigate('/login');
      
    } catch (err) {
      console.error('Error during logout:', err);
    }
  }
  return (
    
    <section className="nav-pane  bg-gray-800 h-screen flex flex-col justify-between">       

    <nav>
        <ul className="nav-menu">
          {user ? (
            <>
              <li>
                <Link to="/" className="nav-link">
                  <div className="menu-icon"><IoMdHome /></div>
                  <div className="menu-description">Home</div>
                </Link>
              </li>
              <li>
                <Link to="/create" className="nav-link">
                  <div className="menu-icon"><FaCirclePlus /></div>
                  <div className="menu-description">Create</div>
                </Link>
              </li>              
              <li>        
                
                  <div onClick={handleLogout} className="menu-description nav-link cursor-pointer text-cyan-500 ">Logout</div>
                
              </li>
              <li className='nav-link cursor-pointer'>
               <Link to="/AI">Chat with AI</Link>             

              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" className="nav-link">
                  <div className="menu-icon m-0"><IoMdHome /></div>
                  <div className="menu-description">Home</div>
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link">
                  <div className="menu-icon">Login</div>
                </Link>
              </li>
              <li>
                <Link to="/signup" className="nav-link">
                  <div className="menu-icon">Sign Up</div>
                </Link>
              </li>
              <li>
                <Link to="/AI">Chat with AI</Link>      
              </li>
            </>
          )}
        </ul>
      </nav>
    </section>
      
    
  )
}

export default Header