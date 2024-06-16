import React from 'react'
import HomePosts from '../components/HomePosts'
import Header from '../components/Header'
import { URL, IMAGE } from '../../url'
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import axios from 'axios'

const Home = () => {
  // State to store the list of posts  
  const [posts,setPosts]=useState([])
  // Context to access user information
  const {user}=useContext(UserContext)
    //get posts from the server
  const fetchPosts=async()=>{
    
    try{
      // Send a GET request to fetch all posts
      const res=await axios.get(URL+"/api/posts/")
      // Update the posts state with the fetched data      
      setPosts(res.data)
     
    }
    catch(err){
      console.log(err)
      
    }
  }
 // Fetch posts when the component mounts
  useEffect(()=>{
    fetchPosts()

  },[])

  return (
    <div>
      <Header/>
      <div className='px-8 md:px-[200px]'>
      {/* Map over the posts and display them as HomePosts components */}

      {posts.map((post)=>(
          
          <Link key={post._id} to={user?`/posts/post/${post._id}`:"/login"}>
            {/* Pass the current post object as a prop to the HomePosts component */}
          <HomePosts  post={post}/>
          </Link>
          
          
        ))}
       </div>
    </div>
       
    
  )
}

export default Home