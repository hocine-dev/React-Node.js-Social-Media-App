import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


import './login.css'; // Import your custom CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    
      navigate('/register');
  
  };

  const handleForgotPassword = () => {
    // Logic for handling forgot password functionality
    console.log('Navigate to forgot password page');
  };

  return (
    <div className="login-root">
      <div className="paper">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <h1 className="title">Hocinebook - Connect with friends around the world</h1>
        <form className="form" onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Log In
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            className="create-account"
            onClick={handleCreateAccount}
          >
            Create Account
          </Button>
          <Button
            fullWidth
            variant="text"
            color="primary"
            className="forgot-password"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </Button>
          <Button
  fullWidth
  variant="text"
  color="primary"
  className="home"
  component={Link}
  to="/"
>
  Back to Home
</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
