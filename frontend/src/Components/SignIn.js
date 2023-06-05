import React, { useState } from 'react';
<<<<<<< HEAD
import { Button, TextField, Typography, Link, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
=======
import './SignIn.css';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';
>>>>>>> 491c5f07349c06bd272d97699ba9dfe4c83e704a

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    const username = email;

    try {
<<<<<<< HEAD
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
=======
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
>>>>>>> 491c5f07349c06bd272d97699ba9dfe4c83e704a
      });

      if (response.ok) {
        const data = await response.json();
        // Authentication successful, do something with the response data
<<<<<<< HEAD
        console.log('User authenticated:', data);
        navigate('/home');
      } else {
        // Authentication failed, handle the error response
        console.error('Authentication failed:', response.status);
      }
    } catch (error) {
      // Network or server error occurred
      console.error('Error occurred:', error);
=======
        console.log("User authenticated:", data);
      } else {
        // Authentication failed, handle the error response
        console.error("Authentication failed:", response.status);
      }
    } catch (error) {
      // Network or server error occurred
      console.error("Error occurred:", error);
>>>>>>> 491c5f07349c06bd272d97699ba9dfe4c83e704a
    }
  };

  const handleShowSignup = () => {
<<<<<<< HEAD
    navigate('/signup');
=======
    navigate("/signup");
>>>>>>> 491c5f07349c06bd272d97699ba9dfe4c83e704a
    setShowSignup(true);
  };

  return (
<<<<<<< HEAD
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
                  label="Email Address"
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
=======
    <div className="Auth-form-container d-flex justify-content-center align-items-center">
      <form className="Auth-form">
        <div className="Auth-form-content">
          {showSignup ? (
            <Signup />
          ) : (
            <>
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>User name</label>
                <br />
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <br />
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <br />
                <button type="submit" className="btn btn-primary" onClick={handleSignIn}>
                  Sign In
                </button>
                <p className="forgot-password text-right mt-2">
                  Don't have an account?{' '}
                  <button type="button" className="btn btn-link" onClick={handleShowSignup}>
                    Sign Up
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
      </form>
    </div>
>>>>>>> 491c5f07349c06bd272d97699ba9dfe4c83e704a
  );
};

export default SignIn;
