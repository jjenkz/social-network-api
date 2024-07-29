const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    first: String,
    last: String,
    email: String,
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "friend",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual proerty "fullName" that gets and sets the user's full name
userSchema.virtual("fullName").get(function () {
  const first = v.split(" ")[0];
  const last = v.split(" ");
  this.set({ first, last });
});

// Initialize User model
const User = model("user", userSchema);

module.exports = User;
