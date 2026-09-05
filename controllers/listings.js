const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    const { category } = req.query;

    let listings;
    if (category) {
        listings = await Listing.find({ category });
    } else {
        listings = await Listing.find({});
    }

    res.json({ listings, category });
};

module.exports.showListing = async (req,res) =>{
    let {id} = req.params;
    const listing  = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"},}).populate("owner");
    if(!listing){
        return res.status(404).json({ error: "Listing you requested for does not exist" });
    };
    res.json({ listing });
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

        res.json({ message: "Listing updated!", listing });
    };

module.exports.destroyListing = async (req,res) => {
    let {id} = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    //console.log(deletedLisitng);
    res.json({ message: "Listing Deleted!" });
};

module.exports.searchListing = async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.json({ listings: [] });
  }

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

    res.json({ listings, searchQuery: query });
};
