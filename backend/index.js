const express = require("express");
const mongoose = require("mongoose")
const app = express();
app.use(express.json())
require("dotenv").config();

const userRoter = require("./Routes/userRoutes");
const Userrot = require("./Routes/users")
const postRoutes = require("./Routes/posts");

app.use(express.static('Frontend'));

const cors = require('cors');


// Enable CORS for all routes
app.use(cors());

// // Route for the homepage
// app.get('/', (req, res) => {

// });

// // Route for the login page
// app.get('/login', (req, res) => {

// });

app.use('/auth', userRoter)
app.use('/user', Userrot)
app.use('/posts', postRoutes)



app.listen(process.env.PORT||3000 , ()=>{
    console.log(`App Listening at Port ${process.env.PORT}`)
})


const DB = "mongodb+srv://awais:1234@pmscluster.07d5y1y.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("Database connected"))
.catch((error)=> console.log(error.message));