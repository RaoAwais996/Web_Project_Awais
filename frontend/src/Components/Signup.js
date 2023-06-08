

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
  colors,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import FlexBetween from "../Components/FlexBetween";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import "./Signup.css";
import { ColorizeOutlined } from "@mui/icons-material";
const registerSchema = yup.object().shape({
  name: yup.string().required("required"),
  username: yup.string().required("required"),
  phone: yup.string().required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const initialValuesRegister = {
  name: "",
  username: "",
  phone: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const SignupForm = () => {
  const [picture, setPicture] = useState(null);
  const [occupations, setOccupations] = useState([]);
  const { palette } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOccupations = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/b611daf3-b1bc-4086-8dc5-446caa4b8dd9"
        );
        const data = await response.json();
        setOccupations(data.occupations);
      } catch (error) {
        console.error("Error fetching occupations:", error);
      }
    };

    fetchOccupations();
  }, []);

  // const handleSignup = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const formData = new FormData();
  //     formData.append('username', username);
  //     formData.append('password', password);
  //     formData.append('name', name);
  //     formData.append('phone', phone);
  //     formData.append('location', location);
  //     formData.append('nearestOccupation', nearestOccupation);
  //     if (picture) {
  //       formData.append('picture', picture);
  //     }

  //     const response = await fetch('http://localhost:3000/auth/signup', {
  //       method: 'POST',
  //       body: formData,
  //     });


  //     if (response.ok) {
  //       const data = await response.json();
  //       // Signup successful, do something with the response data
  //       console.log('User registered:', data);
  //       alert(`Picture uploaded: ${picture.name}`);

  //     } else {
  //       // Signup failed, handle the error response
  //       console.error('Signup failed:', response.status);
  //     }
  //   } catch (error) {
  //     // Network or server error occurred
  //     console.error('Error occurred:', error);
  //   }
  // };

  const register = async (values, onSubmitProps) => {
    // this allows us to send form info with image
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      body: formData,
    });
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      navigate("/home");
    }    else {
      alert("Try again");
    }
  };
  return (
    <Formik
      onSubmit={register}
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: "span 4" },
            }}
          >
{/*            
            <p
  style={{
    color: "#3279a8", // Set text color
    padding: "0.5rem 1rem", // Add padding
    borderRadius: "50px", // Add border radius
    fontWeight: "bold", // Set font weight to bold
    textAlign: "center", // Align text center
    cursor: "pointer", // Add cursor pointer on hover
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add box-shadow
    margin: "auto", // Center horizontally
    display: "flex",
    alignItems: "center",  // Center vertically

    
  }}
>
  Sign Up
</p> */}
            <br>
          
            </br>
<TextField
  label="Name"
  onBlur={handleBlur}
  onChange={handleChange}
  value={values.name}
  name="name"
  error={Boolean(touched.name) && Boolean(errors.name)}
  helperText={touched.name && errors.name}
  sx={{
    gridColumn: "span 2",
    width: "200px",  // Adjust the width as needed
    margin: "0 auto",  // Center horizontally
    display: "flex",
    alignItems: "center",  // Center vertically
  }}
/>

            <TextField
              label="User Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.username}
              name="username"
              error={Boolean(touched.username) && Boolean(errors.username)}
              helperText={touched.username && errors.username}
              sx={{ gridColumn: "span 2" ,
              width: "200px",  // Adjust the width as needed
              margin: "0 auto",  // Center horizontally
              display: "flex",
              alignItems: "center",  }}
            />
            <TextField
              label="Location"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.location}
              name="location"
              error={Boolean(touched.location) && Boolean(errors.location)}
              helperText={touched.location && errors.location}
              sx={{ gridColumn: "span 4",
              width: "200px",  // Adjust the width as needed
              margin: "0 auto",  // Center horizontally
              display: "flex",
              alignItems: "center",   }}
            />
<Autocomplete
  id="occupation"
  options={occupations}
  value={values.occupation}
  onChange={(event, value) => setFieldValue("occupation", value)}
  renderInput={(params) => (
    <TextField
      {...params}
      label="Occupation"
      onBlur={handleBlur}
      error={Boolean(touched.occupation) && Boolean(errors.occupation)}
      helperText={touched.occupation && errors.occupation}
      sx={{ gridColumn: "span 4" ,
      width: "300px",  // Adjust the width as needed
      margin: "0 auto",  // Center horizontally
      display: "flex",
      alignItems: "center",  }}
    />
  )}
/>

<Box
  alignSelf="center"
  gridColumn="span 4"
  color={palette.neutral.dark}
  //write to code center the box with 50% width
  width="50%"


  
  border={`1px solid ${palette.neutral.medium}`}
  borderRadius="5px"
  p="1rem"
  sx={{
    justifyContent: "center", // Align center horizontally
    alignItems: "center", // Align center vertically
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    margin: "0 auto",

  }}
>
  <Dropzone
    acceptedFiles=".jpg,.jpeg,.png"
    multiple={false}
    onDrop={(acceptedFiles) => {
      setPicture(acceptedFiles[0]);
      setFieldValue("picture", acceptedFiles[0]);
    }}
  >
    {({ getRootProps, getInputProps }) => (
      <Box
        {...getRootProps()}
        border={`2px dashed ${palette.primary.main}`}
        p="1rem"
        sx={{ "&:hover": { cursor: "pointer" } }}
      >
        <input {...getInputProps()} />
        {!picture ? (
          <Typography>Add Picture Here</Typography>
        ) : (
          <FlexBetween>
            <Typography>{picture.name}</Typography>
            <EditOutlinedIcon />
          </FlexBetween>
        )}
      </Box>
    )}
  </Dropzone>
</Box>

            <TextField
              label="Phone"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phone}
              name="phone"
              error={Boolean(touched.phone) && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
              sx={{ gridColumn: "span 4",
              width: "200px",  // Adjust the width as needed
              margin: "0 auto",  // Center horizontally
              display: "flex",
              alignItems: "center",   }}
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4",
              width: "200px",  // Adjust the width as needed
              margin: "0 auto",  // Center horizontally
              display: "flex",
              alignItems: "center",   }}

            />
          </Box>
          <br></br>
          <div className="button-container">
        <Button
          type="submit"
          variant="contained"
          className="btn-primary"
        >
          Sign Up
        </Button>
      </div>

        </form>
      )}
    </Formik>
  );
};

export default SignupForm;




// import React, { useState } from 'react';
// import { Button, TextField, Typography, Container, Grid, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import Dropzone from 'react-dropzone';
// import { useTheme } from '@mui/material/styles';
// import { useEffect } from 'react';
// import Autocomplete from '@mui/material/Autocomplete';

// const Signup = () => {
//   const navigate = useNavigate();

//   const theme = useTheme();
//   const palette = theme.palette;

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [picture, setPicture] = useState(null);
//   const [location, setLocation] = useState('');
//   const [nearestOccupation, setNearestOccupation] = useState('');

//   const [occupations, setOccupations] = useState([]);

//   useEffect(() => {
//     const fetchOccupations = async () => {
//       try {
//         const response = await fetch('https://mocki.io/v1/b611daf3-b1bc-4086-8dc5-446caa4b8dd9');
//         if (response.ok) {
//           const data = await response.json();
//           setOccupations(data.occupations);
//         } else {
//           console.error('Failed to fetch occupations:', response.status);
//         }
//       } catch (error) {
//         console.error('Error occurred while fetching occupations:', error);
//       }
//     };

//     fetchOccupations();
//   }, []);



//   const handleCancel = () => {
//     navigate('/signin');
//     // render the SignIn component
//   };

//   return (
//     <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <div className="Auth-form-container">
//         <Typography component="h1" variant="h5" align="center">
//           Sign Up
//         </Typography>
//         <form className="Auth-form">
//           <div className="Auth-form-content">
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="username"
//               label="Username"
//               name="username"
//               autoComplete="username"
//               autoFocus
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="name"
//               label="Name"
//               name="name"
//               autoComplete="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="phone"
//               label="Phone"
//               name="phone"
//               autoComplete="phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />

//             <Box
//               gridColumn="span 4"
//               border={`1px solid ${palette.neutral.medium}`}
//               borderRadius="5px"
//               p="1rem"
//             >
// <Dropzone
//                 acceptedFiles=".jpg,.jpeg,.png"
//                 multiple={false}
//                 onDrop={(acceptedFiles) => setPicture(acceptedFiles[0])}
//               >
//                 {({ getRootProps, getInputProps }) => (
//                   <Box
//                     {...getRootProps()}
//                     border={`2px dashed ${palette.primary.main}`}
//                     p="1rem"
//                     sx={{ '&:hover': { cursor: 'pointer' } }}
//                   >
//                     <input {...getInputProps({ name: 'picture' })} />
//                     {!picture ? (
//                       <Typography>Add Picture Here</Typography>
//                     ) : (
//                       <Typography>{picture.name}</Typography>
//                     )}
//                   </Box>
//                 )}
//               </Dropzone>

//             </Box>

//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="location"
//               label="Location"
//               name="location"
//               autoComplete="location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             />


//  <Autocomplete
//               id="nearestOccupation"
//               options={occupations}
//               getOptionLabel={(option) => option}
//               value={nearestOccupation}
//               onChange={(event, value) => setNearestOccupation(value)}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   fullWidth
//                   label="Occupation"
//                   autoComplete="off"
//                 />
//               )}
//             />

//            <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   onClick={handleSignup}
//                 >
//                   Sign Up
//                 </Button>
//               </Grid>
//               <Grid item xs={6}>
//                 <Button fullWidth variant="text" onClick={handleCancel}>
//                   Cancel
//                 </Button>
//               </Grid>
//             </Grid>
//           </div>
//         </form>
//       </div>
//     </Container>
//   );
// };

// export default Signup;