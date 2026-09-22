const Listing = require("../models/listing.js");
const { getJson, setJson, invalidateListings } = require("../utils/cache.js");

module.exports.index = async (req, res) => {
    const { category } = req.query;
  const cacheKey = `listing:index:${category || "all"}`;
  const cachedListings = await getJson(cacheKey);

  if (cachedListings) return res.json(cachedListings);

    let listings;
    if (category) {
        listings = await Listing.find({ category });
    } else {
        listings = await Listing.find({});
    }

    const response = { listings, category };
    await setJson(cacheKey, response);
    res.json(response);
};

module.exports.showListing = async (req,res) =>{
    let {id} = req.params;
    const cacheKey = `listing:detail:${id}`;
    const cachedListing = await getJson(cacheKey);

    if (cachedListing) return res.json(cachedListing);

    const listing  = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"},}).populate("owner");
    if(!listing){
        return res.status(404).json({ error: "Listing you requested for does not exist" });
    };
    const response = { listing };
    await setJson(cacheKey, response);
    res.json(response);
};

module.exports.createListing = async (req,res, next) => {
        if (!req.file) return res.status(400).json({ error: "Listing image is required" });
        let url = req.file.path;
        let filename = req.file.filename;
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = {url,filename};
        //console.log(url,",,",filename);
        await newListing.save();
        await invalidateListings();
        res.status(201).json({ message: "New Listing Created!", listing: newListing });
    };

module.exports.updateListing = async (req,res) => {
        let {id} = req.params;
        let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
        
        if(typeof req.file!= "undefined"){
            let url = req.file.path;
            let filename = req.file.filename;
            listing.image= {url,filename};
            await listing.save();
        }

          await invalidateListings();
        res.json({ message: "Listing updated!", listing });
    };

module.exports.destroyListing = async (req,res) => {
    let {id} = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    await invalidateListings();
    //console.log(deletedLisitng);
    res.json({ message: "Listing Deleted!" });
};

module.exports.searchListing = async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.json({ listings: [] });
  }

  const cacheKey = `listing:search:${query.toLowerCase()}`;
  const cachedResults = await getJson(cacheKey);

  if (cachedResults) return res.json(cachedResults);

  // Case-insensitive search in title and description
  const regex = new RegExp(query, 'i');

  // Convert query to number (ONLY if it's a valid integer)
  const numericQuery = Number(query);
  const isNumeric = !isNaN(numericQuery);

  const listings = await Listing.find({
    $or: [
      { title: regex },
      { description: regex },
      { location: regex },
      { country : regex },
      { category: regex },
      { usp1: regex },
      { usp2: regex },
      { usp3: regex },
       // Only include numeric matches if user searched a number
      ...(isNumeric ? [
        { guests: numericQuery },
        { bedrooms: numericQuery },
        { beds: numericQuery },
        { bathroom: numericQuery }
      ] : [])
    ]
  });

    const response = { listings, searchQuery: query };
    await setJson(cacheKey, response);
    res.json(response);
};
