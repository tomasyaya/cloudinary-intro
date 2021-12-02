const router = require("express").Router();
const { getMovies, createMovie } = require("../controllers/movie.controllers");
const fileUploader = require("../config/cloudinary.config").single("image");

router.get("/movies", getMovies).post("/movies", fileUploader, createMovie);

module.exports = router;
