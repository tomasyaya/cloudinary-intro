const mongoose = require("mongoose");

const { MONGODB_URL } = process.env;

async function connectDb() {
  try {
    const { connection } = await mongoose.connect(MONGODB_URL);
    console.log(`DB connected: ${connection.name}`);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { connectDb };
