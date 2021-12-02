const { Schema, model } = require("mongoose");

const MovieSchema = new Schema({
  title: String,
  genre: String,
  imageUrl: String,
});

module.exports = model("Movie", MovieSchema);
