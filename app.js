const app = require("express")();

require("./config").config(app);
require("./db").connectDb();

const moviesRoutes = require("./routes/movie.routes");
app.use("/", moviesRoutes);

module.exports = app;
