module.exports = app => {
  const comment = require("../controllers/Comments.controller.js");

  // Create a new Comment
  app.post("/comment", comment.create);
};
