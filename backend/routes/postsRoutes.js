const express=require('express')
const router=express.Router()
const User=require('../models/User')
const bcrypt=require('bcrypt')
const Post=require('../models/Post')
const Comment=require('../models/Comment')
const verifyToken=require("../verifyToken")

//CREATE a post
router.post("/create",verifyToken,async (req,res)=>{
    try{
        // Create a new post instance with the request body
        const newPost=new Post(req.body)
        //Save the new post to the database
        const savedPost=await newPost.save()
        
        res.status(200).json(savedPost)
    }
    catch(err){
        console.log("smth wrong")
        res.status(500).json(err)
    }
     
})

//UPDATE a specific post
router.put("/:id",verifyToken,async (req,res)=>{
    try{
       // Find the post by ID and update it with the new data
        const updatedPost=await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedPost)

    }
    catch(err){
        res.status(500).json(err)
    }
})


//DELETE a specific post
router.delete("/:id",verifyToken, async (req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.id)
        //delete all comments of that post
        await Comment.deleteMany({postId:req.params.id})
        res.status(200).json("Post has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
})


//GET POST DETAILS per post ID
router.get("/:id",async (req,res)=>{
    try{
        const post=await Post.findById(req.params.id)
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET ALL POSTS
router.get("/",async (req,res)=>{   
    
    try{
         // Find all posts
          const posts = await Post.find();
        // Respond with the found posts
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
})




module.exports =router