const mongoose = require("mongoose");
const PostsSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  likes: {
    type: Number,
    default: 0
  },
  imageURL: {
    type: String,
    default: ""
  },
  author: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model("Posts", PostsSchema);
