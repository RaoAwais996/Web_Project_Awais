import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password, name, phone })
      });

      if (response.ok) {
        const data = await response.json();
        // Signup successful, do something with the response data
        console.log("User registered:", data);
      } else {
        // Signup failed, handle the error response
        console.error("Signup failed:", response.status);
      }
    } catch (error) {
      // Network or server error occurred
      console.error("Error occurred:", error);
    }
  };

  const handleCancel = () => {
    navigate("/signin");
    // render the SignIn component
  };

  return (
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
  );
};

export default Signup;
