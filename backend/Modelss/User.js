const mongoose = require("mongoose")
var bcrypt = require("bcrypt");
const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        max:30,
        min:3
    },
    password:{
        type:String,
        required:true,

    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,

},
{ timestamps: true }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
