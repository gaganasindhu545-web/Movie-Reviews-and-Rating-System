const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  movieId: String,
  username: String,
  rating: Number,
  review: String
});

module.exports = mongoose.model("Review", ReviewSchema);