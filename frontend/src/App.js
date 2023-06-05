import React from 'react';
import SignIn from './Components/SignIn';
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import HomePage from './Views/homePage';
import ProfilePage from './Views/profilePage';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./Components/styling";


function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


  return <div className="App">
    <BrowserRouter>
    <ThemeProvider theme={theme}>
          <CssBaseline />
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile/:userId" element={<ProfilePage />} />
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
    </div>
  ;
}

export default App;
