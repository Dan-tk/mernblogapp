import React from 'react'
import HomePosts from '../components/HomePosts'
import Header from '../components/Header'
import { URL, IMAGE } from '../../url'
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import axios from 'axios'

const Home = () => {
  
  
  const [posts,setPosts]=useState([])
  const {user}=useContext(UserContext)
    
  const fetchPosts=async()=>{
    
    try{
      const res=await axios.get(URL+"/api/posts/")      
      setPosts(res.data)
     
    }
    catch(err){
      console.log(err)
      
    }
  }

  useEffect(()=>{
    fetchPosts()

  },[])

  return (
    <div>
      <Header/>
      <div className='px-8 md:px-[200px]'>
      {posts.map((post)=>(
          
          <Link key={post._id} to={user?`/posts/post/${post._id}`:"/login"}>
          <HomePosts  post={post}/>
          </Link>
          
          
        ))}
       </div>
    </div>
       
    
  )
}

export default Home