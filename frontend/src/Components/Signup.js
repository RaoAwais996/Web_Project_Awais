import React, { useState } from 'react';
<<<<<<< HEAD
import { Button, TextField, Typography, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
=======
import { useNavigate } from 'react-router-dom';
import './Signup.css';
>>>>>>> 491c5f07349c06bd272d97699ba9dfe4c83e704a

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
<<<<<<< HEAD
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, name, phone }),
=======
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password, name, phone })
>>>>>>> 491c5f07349c06bd272d97699ba9dfe4c83e704a
      });

      if (response.ok) {
        const data = await response.json();
        // Signup successful, do something with the response data
<<<<<<< HEAD
        console.log('User registered:', data);
      } else {
        // Signup failed, handle the error response
        console.error('Signup failed:', response.status);
      }
    } catch (error) {
      // Network or server error occurred
      console.error('Error occurred:', error);
=======
        console.log("User registered:", data);
      } else {
        // Signup failed, handle the error response
        console.error("Signup failed:", response.status);
      }
    } catch (error) {
      // Network or server error occurred
      console.error("Error occurred:", error);
>>>>>>> 491c5f07349c06bd272d97699ba9dfe4c83e704a
    }
  };

  const handleCancel = () => {
<<<<<<< HEAD
    navigate('/signin');
=======
    navigate("/signin");
>>>>>>> 491c5f07349c06bd272d97699ba9dfe4c83e704a
    // render the SignIn component
  };

  return (
<<<<<<< HEAD
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

      <div className="Auth-form-container">
        <Typography component="h1" variant="h5" align="center">
          Sign Up
        </Typography>
        <form className="Auth-form">
          <div className="Auth-form-content">
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone"
              name="phone"
              autoComplete="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={handleSignup}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="text"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    </Container>
=======
    <div className="Auth-form-container d-flex justify-content-center align-items-center">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <br />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div className="form-group mt-3">
            <label>Name</label>
            <br />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone</label>
            <br />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <br />
            <button type="submit" className="btn btn-primary" onClick={handleSignup}>
              Sign Up
            </button>
            <button type="button" className="btn btn-link" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
>>>>>>> 491c5f07349c06bd272d97699ba9dfe4c83e704a
  );
};

export default Signup;
