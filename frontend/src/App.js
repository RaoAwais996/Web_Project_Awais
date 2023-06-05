import React from 'react';
import SignIn from './Components/SignIn';
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';


const App = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
