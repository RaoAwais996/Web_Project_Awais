import React, { useState } from 'react';
import { Button, TextField, Typography, Link, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
import { useDispatch } from 'react-redux';
import { setLogin } from '../state/index.js';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async (event) => {
    event.preventDefault();
    const username = email;

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Authentication successful, do something with the response data
        console.log('User authenticated:', data);
        dispatch(setLogin({ username: username, token: data.token }));
        console.log(username, data.token);
        navigate('/home');
      } else {
        // Authentication failed, handle the error response
        console.error('Authentication failed:', response.status);
        alert('Authentication failed');
      }
    } catch (error) {
      // Network or server error occurred
      console.error('Error occurred:', error);
      alert('Error occurred');
    }
  };

  const handleShowSignup = () => {
    navigate('/signup');
    setShowSignup(true);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="Auth-form-container">
        <Typography component="h1" variant="h5" align="center">
          {showSignup ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form className="Auth-form">
          <div className="Auth-form-content">
            {showSignup ? (
              <Signup />
            ) : (
              <>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Username"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2" onClick={handleShowSignup}>
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </>
            )}
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
