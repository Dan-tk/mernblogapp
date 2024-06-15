import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import Comment from "../components/Comment"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import LikeButton from "../components/Likes"
import wallpaper from "../../public/wallpaperflare.com_wallpaper.jpg"
import Header from "../components/Header"



const PostDetails = () => {

  const [comments,setComments]=useState([])
  const [comment,setComment]=useState("")  
  const navigate=useNavigate()
  

  const fetchPost=async()=>{
    
  }

  const handleDeletePost=async ()=>{   

  }  

  const postComment=async(e)=>{
    e.preventDefault()    

  }
  
  return (
    <div>
      <Header/>
        
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
         <h1 className="text-2xl font-bold text-black md:text-3xl">10uses of AI</h1>
         <div className="flex items-center justify-center space-x-2">
            <p className="cursor-pointer" onClick={()=>navigate("/edit/"+postId)} ><BiEdit/></p>
            <p className="cursor-pointer" onClick={handleDeletePost}><MdDelete/></p>
         </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
        <p>@danthiongo</p>       
        </div>
        <img src={wallpaper} className="w-full  mx-auto mt-8" alt=""/>
         <p className="mx-auto mt-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius delectus, atque accusamus itaque cupiditate non esse ex rerum illum impedit optio quo, qui voluptates ullam nesciunt, consequatur amet error. Delectus.</p>
         <div className="flex items-center mt-8">
          <LikeButton />
        </div>
        
         <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">          
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Sports</div>         
            
          </div>
         </div>
         <div className="flex flex-col mt-4">
         <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>  
         {/* write a comment */}
         <div className="w-full flex flex-col mt-4 md:flex-row">
          <input onChange={(e)=>setComment(e.target.value)} type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
          <button onClick={postComment} className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
         </div>  
         {/* display comments */}
          <Comment/>                
          <Comment/>                
          <Comment/>                
          <Comment/>                
          <Comment/>                
         </div>               
        </div>
        
    </div>
  )
}

export default PostDetails