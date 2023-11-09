const mongoose = require("mongoose")
const ApartmentSchema = mongoose.Schema({
name: String,
price: Number,
Location: String
})
module.exports = mongoose.model("Apartment",ApartmentSchema)