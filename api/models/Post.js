const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Post Schema
const PostSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, // User ID reference
      required: true,
      ref: "User",
    },
    desc: {
      type: String,
      maxlength: 500,
      required: true,
    },
    img: {
      type: String,
      default: "",
    },
    likes: {
      type: [Schema.Types.ObjectId], // Array of User ObjectIds
      default: [],
      ref: "User",
    },
  },
  { timestamps: true }
);

// Create and export the Post model
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
