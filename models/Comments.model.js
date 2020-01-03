const mongoose = require("mongoose");
const CommentsSchema = new mongoose.Schema({
  commentedBy: {
    type: String,
    default: ""
  },
  postId: {
    type: Number,
    default: ""
  },
  comment: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model("Comments", CommentsSchema);
