import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import axios from "axios"
import { URL } from '../../url'
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

// Comment component receives two props: c (comment object) and post (post object)
const Comment = ({c,post, setComments}) => {

   // Access user data from the UserContext
  const {user}=useContext(UserContext)
  //delte comment
  const deleteComment=async(id)=>{
    try {
      // Send a delete request to the server to delete the comment with the specified ID
      await axios.delete(URL + "/api/comments/" + id, { withCredentials: true })
      // Update the comments state in the parent component by calling setComments
      setComments((prevComments) => prevComments.filter((comment) => comment._id !== id))
    } catch (err) {
      // Log any errors that occur during the delete request
      console.log(err)
    }
  }
  
  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
           <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-600">@{c.author}</h3>
            <div className="flex justify-center items-center space-x-4">            
            {user?._id===c?.userId ?
              <div className="flex items-center justify-center space-x-2">
                    <p className="cursor-pointer" onClick={()=>deleteComment(c._id)}><MdDelete/></p>
                </div>:""}
                
            </div>
           </div>
           <p className="px-4 mt-2">{c.comment}</p>

           </div>
  )
}

export default Comment