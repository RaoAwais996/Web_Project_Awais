const User = require("../Modelss/User");
// Get user by ID
 const getUser = async (req, res) => {
    console.log("hello")
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get user's friends
 const getUserFriends = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const friends = await User.find({ _id: { $in: user.friends } });
    res.status(200).json(friends);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Add or remove a friend
 const addRemoveFriend = async (req, res) => {
  const { id, friendId } = req.params;

  try {
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (!user || !friend) {
      return res.status(404).json({ message: "User or friend not found" });
    }

    const isFriend = user.friends.includes(friendId);

    if (isFriend) {
      // Remove friend
      user.friends = user.friends.filter((f) => f.toString() !== friendId);
      friend.friends = friend.friends.filter((f) => f.toString() !== id);
    } else {
      // Add friend
      user.friends.push(friendId);
      friend.friends.push(id);
    }

    await user.save();
    await friend.save();

    res.status(200).json({ message: "Friend updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getUser, getUserFriends, addRemoveFriend };