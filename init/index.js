const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing  = require("../models/listing.js");
const MongoStore = require("connect-mongo");

const dotenv = require("dotenv");

// Load root .env
dotenv.config({ path: "../.env" });

const dbUrl = process.env.ATLASDB_URL; //not required after initialisation

main()
    .then(()=>{
        console.log("connected to DB");
    })
    .catch((err) =>{
        console.log(err);
    });

async function main() {
    await mongoose.connect(dbUrl);
}

const categories = [
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

const owners = [
  "693bb866314f659b5997be68",
  "693bb8bb314f659b5997be8f", // Bob
  "693bb8a8314f659b5997be82", // Alice
  "693bb892314f659b5997be75"  // Ali
];

const initDB = async () => {
    await Listing.deleteMany({});

    initdata.data = initdata.data.map((obj) => {
        const randomOwner = owners[Math.floor(Math.random() * owners.length)];

        return {
            ...obj,
            owner: randomOwner
        };
    });

    //John  - 693536c1c3b0369d212bdaf2
    //Alice - 693536f0c3b0369d212bdafd
    //Ali - 69353712c3b0369d212bdb09

    await Listing.insertMany(initdata.data);
    console.log("Data was initialised");
};

initDB();
