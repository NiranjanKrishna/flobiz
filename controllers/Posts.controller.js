const Post = require("../models/Posts.model.js");

// Create and Save a new Note
new Post();
// Create and Save a new Note
exports.create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty"
    });
  }

  // Create a Note
  const post = new Post({
    title: req.body.title,
    description: req.body.descp,
    imageURL: req.body.imgURL,
    author: req.body.author,
    likes: req.body.likes
  });

  // Save Note in the database
  post
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

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty"
    });
  }

  // Find note and update it with the request body
  Post.findByIdAndUpdate(
    req.params.postId,
    {
      title: req.body.title,
      description: req.body.descp,
      imageURL: req.body.imgURL,
      author: req.body.author,
      likes: req.body.likes
    },
    { new: true }
  )
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId
        });
      }
      res.send(user);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId
        });
      }
      return res.status(500).send({
        message: "Error updating note with id " + req.params.noteId
      });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.noteId)
    .then(post => {
      if (!post) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId
        });
      }
      res.send({ message: "Note deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId
        });
      }
      return res.status(500).send({
        message: "Could not delete note with id " + req.params.noteId
      });
    });
};
