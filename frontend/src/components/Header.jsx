import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { FcMms } from "react-icons/fc";
import { FaCirclePlus } from "react-icons/fa6"
import boxTalkLogo from '../../public/box-talk.svg'
import { CgDetailsMore } from "react-icons/cg";

const Header = () => {
 
  const accountId = 1 
  return (
    <>
    <section className="nav-pane">

        <div className="brand-container">
          <div className="logo-con">
            <img 
              src={boxTalkLogo} 
              alt="Box-talk-logo"
              height={40}
              width={40}  
            />
          </div>

          <div className="brand-name">
            YOU
          </div>
        </div>

      <nav>        
        <ul className="nav-menu">            
          <div>
          <div>
          <li><Link to="/" className="nav-link">
            <div className="menu-icon"><IoMdHome/></div>
            <div className="menu-description">Home</div>
            </Link>
          </li>
          <li><Link to="/create" className="nav-link">
            <div className="menu-icon"><FaCirclePlus/></div>
            <div className="menu-description">Create</div>
            </Link>
          </li>
          <li><Link to="/logout">Logout</Link></li>
          <li><Link to={`/profile/${accountId}`}>Profile</Link></li>
          </div>

          <div>
          <li><Link to="/" className="nav-link">
            <div className="menu-icon"><IoMdHome/></div>
            <div className="menu-description">Home</div>
            </Link>
          </li>
          <li><Link to='/login'>Login</Link></li>          
          <li><Link to="/signUp" className="nav-link">SignUp</Link></li>
          </div>
          </div>


          
          

          
        </ul>
      </nav>
    </section>
      
    </>
  )
}

export default Header