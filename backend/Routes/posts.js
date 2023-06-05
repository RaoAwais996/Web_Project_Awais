const express = require("express");
const {createPost, getFeedPosts, getUserPosts, likePost } = require("../Controller/posts.js");
const  verifyToken  = require("../middleware/auth.js");
const router = express.Router();

router.get("/", verifyToken, getFeedPosts);
router.post("/create", verifyToken, createPost);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.patch("/:id/like", verifyToken, likePost);

module.exports = router;