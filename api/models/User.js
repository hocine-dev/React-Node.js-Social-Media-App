const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define User Schema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: [Schema.Types.ObjectId], // Array of User ObjectIds
      default: [],
    },
    following: {
      type: [Schema.Types.ObjectId], // Array of User ObjectIds
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc:{
      type:String,
      max:50,
      default: "",
    },
    city:{
      type:String,
      max:50,
      default: "",
    },
    from:{
      type:String,
      max:50,
      default: "",
    },
    relation:{
      type:Number,
      enum:[1,2,3],
      default: 1
    },
  },
  { timestamps: true }
); 

// Create and export the User model
const User = mongoose.model("User", UserSchema);
module.exports = User;
