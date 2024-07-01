const router = require("express").Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// REGISTER
router.post('/register', async (req, res) => {
    try {
      // Extract user details from request body
      const { username, email, password } = req.body;

      // Check if username or email already exist in database
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(400).send('Username already exists');
      }

      // hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password,salt);
  
  
      // Create a new user instance
      const newUser = new User({
        username,
        email,
        password:hashedPassword
      });
  
      // Save the new user to the database
      await newUser.save();
  
      res.status(201).send('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).send('Error registering user');
    }
  });

// LOGIN
router.post('/login', async (req, res) => {
  try {
      // Extract email and password from request body
      const { username, password } = req.body;

      // Check if the user exists in the database
      const user = await User.findOne({ username });
      if (!user) {
          return res.status(400).send('Invalid username');
      }

      // Compare the provided password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).send('Invalid password');
      }

      /*// Generate a JWT token
      const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
          expiresIn: '1h' // Token expiration time
      }); */

      // Send the token to the client
      res.status(200).send('Login successful');
  } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).send('Error logging in');
  }
});
  

module.exports = router;
