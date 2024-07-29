const { Schema, Model } = require("mongoose");

// Schema to create thought model
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min: 1,
    max: 280,
  },
  createdAt: {
    type: Date,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

// Initialize thought model
const Thought = Model("Thought", thoughtSchema);

module.exports = Thought;
