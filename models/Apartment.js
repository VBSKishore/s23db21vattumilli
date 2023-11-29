const mongoose = require("mongoose")
const ApartmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    Location: {
        type: String,
        required: true

    },
    price: {
        type: Number,
        required: true,
        min: [1, 'Quantity must be at least 1'],  // Minimum value and error message
        max: [1000000, 'Quantity cannot exceed 1000000'],
    }

});
module.exports = mongoose.model("Apartment", ApartmentSchema)