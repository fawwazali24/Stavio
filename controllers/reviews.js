const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview =  async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    res.status(201).json({ message: "New review added!", review: newReview });
};

module.exports.destroyReview = async (req, res) => {
    let {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id ,{pull : {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.json({ message: "Review Deleted!" });
};