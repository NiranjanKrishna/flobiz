const Comment = require("../models/Comments.model.js");

// Create and Save a new Note
new Comment();
// Create and Save a new Note
exports.create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty"
    });
  }

  // Create a Note
  const comment = new Comment({
    commentById: req.body.commentbyId,
    postId: req.body.postId,
    comment: req.body.comment
  });

  // Save Note in the database
  comment
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Note."
      });
    });
};
