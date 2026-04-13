const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

router.post("/add", async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.json({ message: "Review Added" });
});

router.get("/:movieId", async (req, res) => {
  const reviews = await Review.find({ movieId: req.params.movieId });
  res.json(reviews);
});

module.exports = router;