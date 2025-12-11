const Joi = require("joi");

const allowedCategories = [
    "Cities",
    "Mountains",
    "Beaches",
    "Pools",
    "Farms",
    "Resorts",
    "Forests",
    "Heritage",
    "Arctic",
    "Premium",
    "Others"
];

module.exports.listingSchema =  Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.object({
            url: Joi.string().allow("", null),
            filename: Joi.string(),
        }),
        category: Joi.string()
            .valid(...allowedCategories)
            .required(),
        usp1: Joi.string().required(),
        usp2: Joi.string().required(),
        usp3: Joi.string().required(),
        guests: Joi.number().required(),
        bedrooms: Joi.number().required(),
        beds: Joi.number().required(),
        bathroom: Joi.number().required(),
        checkin: Joi.string().required(),
        checkout: Joi.string().required(),
    }).required(),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});