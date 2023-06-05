const Post = require("../Modelss/Posts");

// Create a new post
 const createPost = async (req, res) => {
    const { userId, name, location, description, picturePath, userPicturePath } = req.body;
    try {
      const newPost = new Post({
        userId,
        name,
        location,
        description,
        picturePath,
        userPicturePath,
        likes: new Map(),
        comments: [],
      });
  
      const createdPost = await newPost.save();
      res.status(201).json(createdPost);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

// Get posts for the user's feed
 const getFeedPosts = async (req, res) => {
  try {
    // Retrieve posts based on user's preferences or algorithms
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get posts for a specific user
 const getUserPosts = async (req, res) => {
  const userId = req.params.userId;

  try {
    const posts = await Post.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Like or unlike a post
 const likePost = async (req, res) => {
  const postId = req.params.id;
  const userId = req.userId;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const isLiked = post.likes.get(userId) || false;

    if (isLiked) {
      // Unlike post
      post.likes.delete(userId);
    } else {
      // Like post
      post.likes.set(userId, true);
    }

    await post.save();
    res.status(200).json({ message: "Post liked/unliked successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = { createPost, getFeedPosts, getUserPosts, likePost };