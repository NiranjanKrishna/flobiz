const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    default: ""
  },
  last_name: {
    type: String,
    default: ""
  },
  bio: {
    type: String,
    default: ""
  },
  gender: {
    type: String,
    default: ""
  },
  age: {
    type: Number,
    default: 0
  },
  email: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  }
});
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model("User", UserSchema);
