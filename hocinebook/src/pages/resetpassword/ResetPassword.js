import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import './resetpassword.css'; // Import your custom CSS file

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  

  return (
    <div className="resetpassword-root">
      <div className="paper">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <h1 className="title">Reset Password</h1>
        <form className="form" >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Reset Password
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

export default ResetPassword;
