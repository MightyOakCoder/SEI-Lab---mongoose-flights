const mongoose = require("mongoose")
const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airport: String,
    arrival: Date
}, {
    timestamps: true
})

module.exports = mongoose.model("Destination", destinationSchema)