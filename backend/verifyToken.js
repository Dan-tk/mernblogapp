const jwt=require('jsonwebtoken')

// Middleware function to verify JWT
const verifyToken = (req, res, next) => {
    // Retrieve the token from cookies
    const token = req.cookies.token;
    
    // Check if token exists If no token, respond with a 401 (Unauthorized) status and a message
    if (!token) {        
        return res.status(401).json("You are not authenticated!");
    }    
    // Verify the token
    jwt.verify(token, process.env.SECRET, async (err, data) => {        
        if (err) {
            return res.status(403).json("Token is not valid!");
        }        
        // If token is valid, extract user information (e.g., user ID) from the token payload
        req.userId = data._id;       
        
        next();
    });
}

module.exports=verifyToken