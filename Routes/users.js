const express = require("express");
const { getUser, getUserFriends, addRemoveFriend } = require("../Controller/users.js");
const  verifyToken  = require("../middleware/auth.js");
const router = express.Router();

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

module.exports = router;

//646241e7d1bb48ad86b306de