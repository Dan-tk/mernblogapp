const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const multer=require('multer')
const path=require("path")
const cookieParser=require('cookie-parser')
const authRoute=require('./routes/authRoutes')
const postRoute=require('./routes/postsRoutes')
const commentRoute=require('./routes/commentsRoute')

//connect to database
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connected successfully!")

    }
    catch(err){
        console.log(err)
    }
}
/* Middlewre */
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use("/images", express.static(path.join(__dirname,"/images")))
app.use(cors())

//routes
app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",commentRoute)

//image upload
// Set up storage configuration for Multer
const storage = multer.diskStorage({
    // Define the destination directory for uploaded files
    destination: (req, file, fn) => {
        // 'fn' is a callback function that takes two arguments: error and destination directory
        // 'null' means no error, and "images" is the directory where files will be stored
        fn(null, "images");
    },
    // Define the filename for uploaded files
    filename: (req, file, fn) => {
        // 'fn' is a callback function that takes two arguments: error and filename
        // 'req.body.img' is the filename, which is expected to be provided in the request body
        fn(null, req.body.img);
    }
});

// Create an instance of Multer with the storage configuration
const upload = multer({ storage: storage });

// Set up an API endpoint to handle file uploads
app.post("/api/upload", upload.single("file"), (req, res) => {
    // If the upload is successful, send a success response
    res.status(200).json("Image has been uploaded successfully!");
});

// Start the server and listen on the specified port
app.listen(process.env.PORT, () => {   
    connectDB();    
    console.log("app is running on port " + process.env.PORT);
});