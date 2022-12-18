const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date
});

// const Flight = new mongoose.model("Flight", flightSchema)

// const data = new Flight({
//     airline: 'american',
//     airport: 'DEN',
//     flightNo: 104,
//     departs: new Date
// })
// data.save()

module.exports = mongoose.model("Flight", flightSchema);