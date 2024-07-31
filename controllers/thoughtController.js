const { Thought, User } = require("../models");

module.exports = {
  // get all thoughts
  // http://localhost:3001/api/thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // get a single thought by Id
  // http://localhost:3001/api/thoughts/:thoughtId
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new thought
  // http://localhost:3001/api/thoughts
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      // const user = await User.findOneAndUpdate(
      //   { _id: req.body.userId },
      //   { $addToSet: { thoughts: thought._id } },
      //   { new: true }
      // );

      if (!thought) {
        return res.status(404)({
          message: "Thought created but no user found with that ID",
        });
      }

      res.json("Created the thought");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update a thought by Id
  // http://localhost:3001/api/thoughts/:thoughtId
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with that ID" });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // delete a thought by Id
  // http://localhost:3001/api/thoughts/:thoughtId
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with that ID" });
      }

      // const user = await User.findOneAndUpdate(
      //   { thoughts: req.params.thoughtId },
      //   { $pull: { thoughts: req.params.thoughtId } },
      //   { new: true }
      // );

      // if (!user) {
      //   return res
      //     .status(404)
      //     .json({ message: "Thought deleted but no user found with this iD" });
      // }

      res.json({ message: "Thought successfuly deleted" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a reaction and store in thoughts array
  // http://localhost:3001/api/thoughts/:thoughtId/reactions
  async createReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // delete a reaction by unique Id
  // http://localhost:3001/api/thoughts/:thoughtId/reactions
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
