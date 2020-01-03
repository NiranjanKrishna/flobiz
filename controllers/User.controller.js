const User = require("../models/User.model.js");

// Create and Save a new Note
new User();
// Create and Save a new Note
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Note content can not be empty"
    });
  }

  // Create a Note
  const user = new User({
    first_name: req.body.fname,
    last_name: req.body.lname,
    bio: req.body.bio,
    gender: req.body.gender,
    age: req.body.age,
    content: req.body.content,
    email: req.body.email,
    password: req.body.password
  });

  // Save Note in the database
  user
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
  User.findByIdAndUpdate(
    req.params.noteId,
    {
      first_name: req.body.fname,
      last_name: req.body.lname,
      bio: req.body.bio,
      gender: req.body.gender,
      age: req.body.age,
      content: req.body.content,
      email: req.body.email,
      password: req.body.password
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
    .then(note => {
      if (!note) {
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
