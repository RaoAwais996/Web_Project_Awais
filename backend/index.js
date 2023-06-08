
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const fileURLToPath = require("url");

const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const userRoter = require("./Routes/userRoutes");
const Userrot = require("./Routes/users");
const postRoutes = require("./Routes/posts");

const multer = require('multer');
const {signup} = require("./Controller/userController.js");
const { createPost} = require("./Controller/posts.js");
const {verifyToken} = require("./middleware/auth.js");

const User  = require("./Modelss/User.js");
const Post = require("./Modelss/Posts.js");

const cors = require('cors');


// const currentURL = new URL(import.meta.url);
// const __filename = fileURLToPath(currentURL);
// const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });

  app.post("/auth/signup", upload.single("picture"), (req, res) => {
    if (req.file) {
      console.log("File uploaded successfully");
    } else {
      console.log("File not uploaded");
    }
    signup(req, res);
  });
  
  // app.post("/auth/signup", upload.single("picture"), signup);
//   app.post("/posts", verifyToken, upload.single("picture"), createPost);

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


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const multer = require("multer");
// const helmet = require("helmet");
// const morgan = require("morgan");
// const path = require("path");
// const { fileURLToPath } = require("url");
// const authRoutes = require("./Routes/auth.js");
// const userRoutes = require("./Routes/users.js");
// const postRoutes = require("./Routes/posts.js");
// const { register } = require("./Controller/auth.js");
// const { createPost } = require("./Controller/posts.js");
// const { verifyToken } = require("./middleware/auth.js");
// const User = require("./Models/User.js");
// const Post = require("./Models/Post.js");
// const { users, posts } = require("./data/index.js");

// /* CONFIGURATIONS */
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config();
// const app = express();
// app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(morgan("common"));
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());
// app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// /* FILE STORAGE */
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/assets");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage });

// /* ROUTES WITH FILES */
// app.post("/auth/register", upload.single("picture"), register);
// app.post("/posts", verifyToken, upload.single("picture"), createPost);

// /* ROUTES */
// app.use("/auth", authRoutes);
// app.use("/users", userRoutes);
// app.use("/posts", postRoutes);

// /* MONGOOSE SETUP */
// const PORT = process.env.PORT || 6001;
// const DB = "mongodb+srv://awais:1234@pmscluster.07d5y1y.mongodb.net/?retryWrites=true&w=majority";
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

//     /* ADD DATA ONE TIME */
//     // User.insertMany(users);
//     // Post.insertMany(posts);
//   })
//   .catch((error) => console.log(`${error} did not connect`));
