const { Schema, Model, Types } = require("mongoose");

// Schema to create reaction model
const reactionSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    requried: true,
    max: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Initialize reaction model
const Reaction = Model("Reaction", reactionSchema);

module.exports = Reaction;
