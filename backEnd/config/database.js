let mongoose = require('mongoose');

require('dotenv').config();

let dBconnect = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((err)=>{
        console.log('Error connecting to MongoDB', err);
        process.exit(1);
    });
}

module.exports = dBconnect;