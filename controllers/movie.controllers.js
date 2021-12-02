const Movie = require("../model/movie.model");

async function getMovies(req, res) {
  const movie = await Movie.find();
  res.json(movie);
}

async function createMovie(req, res) {
  console.log("req.file", req.file);
  const { path: imageUrl } = req.file;
  const { title, genre } = req.body;
  const newMovie = await Movie.create({ imageUrl, title, genre });
  res.json(newMovie);
}

module.exports = { getMovies, createMovie };
