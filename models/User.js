const { Schema, Model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      requried: true,
      unique: true,
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
    friends: {
      type: Schema.Types.ObjectId,
      ref: "Friend",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Initialize User model
const User = Model("User", userSchema);

module.exports = User;
