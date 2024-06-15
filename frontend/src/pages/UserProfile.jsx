import React from 'react'
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ProfilePosts from '../components/ProfilePosts'
import Header from '../components/Header'

const UserProfile = () => {
  return (
    <div>    
      <Header/>
      <div className="min-h-[80vh] px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
       <div className="flex flex-col md:w-[70%] w-full mt-8 md:mt-0">
         <h1 className="text-xl font-bold mb-4">Your posts:</h1>         
          <ProfilePosts/>       
        </div>
     </div>
    
    </div>
    
  )
}

export default UserProfile