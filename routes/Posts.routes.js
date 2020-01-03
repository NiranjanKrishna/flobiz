module.exports = app => {
  const post = require("../controllers/Posts.controller.js");

  // Create a new Note
  app.post("/post", post.create);

  // Update a Note with noteId
  app.put("/post/:postId", post.update);

  // Delete a Note with noteId
  app.delete("/post/:postId", post.delete);
};
