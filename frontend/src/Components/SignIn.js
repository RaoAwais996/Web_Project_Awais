import React, { useState } from 'react';
import './SignIn.css';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    const username = email;

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        // Authentication successful, do something with the response data
        console.log("User authenticated:", data);
      } else {
        // Authentication failed, handle the error response
        console.error("Authentication failed:", response.status);
      }
    } catch (error) {
      // Network or server error occurred
      console.error("Error occurred:", error);
    }
  };

  const handleShowSignup = () => {
    navigate("/signup");
    setShowSignup(true);
  };

  return (
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
  );
};

export default SignIn;
