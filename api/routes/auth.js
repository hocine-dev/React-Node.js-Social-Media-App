const router = require("express").Router();
const User = require('../models/User');

// REGISTER
router.post('/register', async (req, res) => {
    try {
      // Extract user details from request body
      const { username, email, password } = req.body;
  
      // Check if username or email already exist in database
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(400).send('Username or email already exists');
      }
  
      // Create a new user instance
      const newUser = new User({
        username,
        email,
        password, 
        profilePicture: '',
        coverPicture: '',
        followers: [],
        following: [],
        isAdmin: false
      });
  
      // Save the new user to the database
      await newUser.save();
  
      res.status(201).send('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).send('Error registering user');
    }
  });
  

module.exports = router;
