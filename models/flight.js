const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: Number,
    flight: [{ type: Schema.Types.ObjectId, ref: "Flight" }],
})

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    base: [{ type: Schema.Types.ObjectId, ref: "Destination" }],
});

module.exports = mongoose.model("Flight", flightSchema);