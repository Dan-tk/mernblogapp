const express=require('express')
const router=express.Router()
const User=require('../models/User')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


/* Sign up a new user */
router.post("/signup", async(req, res) => {
    try {
        const { username, email, password } = req.body;
        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);
        // Create a new user with hashed password
        const newUser = new User({ username, email, password: hashedPassword });
        // Save the new user to the database
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

/* Login an existing user */
router.post("/login", async(req, res) => {
    try {
        // Find the user by email
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json("User not found!");
        }
        // Compare the provided password with the hashed password
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
            return res.status(401).json("Wrong credentials!");
        }
        // Create a JWT token and set it as a cookie
        const token = jwt.sign({ id: user._id, username: user.username, email: user.email }, process.env.SECRET, { expiresIn: "3d" });
        // Return user object without the password
        const { password, ...info } = user._doc;
        res.cookie("token", token).status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});

/* Logout the user */
router.get("/logout", async(req, res) => {
    try {
        // Clear the JWT cookie
        res.clearCookie("token", { sameSite: "none", secure: true }).status(200).send("User logged out successfully!");
    } catch (err) {
        res.status(500).json(err);
    }
});

/* Refetch user information */
router.get("/refetch", (req, res) => {
    // Get the token from the cookie
    const token = req.cookies.token;
    // Verify the token and return user data
    jwt.verify(token, process.env.SECRET, {}, async(err, data) => {
        if (err) {
            return res.status(404).json(err);
        }
        res.status(200).json(data);
    });
});
module.exports =router