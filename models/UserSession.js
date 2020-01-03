const mongoose = require("mongoose");
const UserSession = mongoose.Schema({
  userId: {
    type: Number,
    default: -1
  },
  DateStamp: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});
