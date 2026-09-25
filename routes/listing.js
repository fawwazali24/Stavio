const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const Listing  = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const bookingController = require("../controllers/bookings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js")
const upload = multer({storage}); //multer will upload directly to cloud storage


//same path multiple fucntions
//index and create route
router.route("/")
.get(wrapAsync(listingController.index)) 
.post(  
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
);


//New route
//search route
router.get("/search", wrapAsync(listingController.searchListing));

router.post(
    "/:id/book",
    isLoggedIn,
    wrapAsync(bookingController.bookListing),
);

//Edit route
//show, update and delete route
router.route("/:id")
.get(wrapAsync(listingController.showListing ))
.put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync( listingController.updateListing)
)
.delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing));


module.exports = router;

