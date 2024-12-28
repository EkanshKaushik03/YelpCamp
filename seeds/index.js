const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers')
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for(let i=0; i<50; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '6767f97aca9971b9d6d20e92',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, enim. Deserunt, molestiae itaque maxime in illum possimus numquam quidem qui esse quo, totam, dolor praesentium perspiciatis facilis debitis ab incidunt.',
            price,
            images:
                [
                {
                  url: 'https://res.cloudinary.com/dnp23f1ju/image/upload/v1735305239/YelpCamp/wpewuser5envxxx4skl3.png',
                  filename: 'YelpCamp/wpewuser5envxxx4skl3',
                },
                {
                  url: 'https://res.cloudinary.com/dnp23f1ju/image/upload/v1735305241/YelpCamp/kzk3gkf7tsg1q40j2sbn.png',
                  filename: 'YelpCamp/kzk3gkf7tsg1q40j2sbn',
                }
              ]
        })
        await camp.save();
    }

}

seedDB().then( () => {
    mongoose.connection.close();
})