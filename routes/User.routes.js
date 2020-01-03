module.exports = app => {
  const user = require("../controllers/User.controller.js");

  // Create a new Note
  app.post("/user", user.create);

  // Update a Note with noteId
  app.put("/user/:userId", user.update);

  // Delete a Note with noteId
  app.delete("/user/:userId", user.delete);
};
