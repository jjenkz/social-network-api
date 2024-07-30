const { Thought, User } = require("../models");

module.exports = {
  // get all thoughts
  async getThoughts(req, res) {},
  // get a single thought by Id
  async getSingleThought(req, res) {},
  // create a new thought
  async createThought(req, res) {},
  // update a thought by Id
  async updateThought(req, res) {},
  // delete a thought by Id
  async deleteThought(req, res) {},
  // create a reaction and store in thoughts array
  async createReaction(req, res) {},
  // delete a reaction by unique Id
  async deleteReaction(req, res) {},
};
