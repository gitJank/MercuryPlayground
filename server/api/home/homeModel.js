var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HomeSchema = new Schema({
    address: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String, 
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    bedrooms: {
        type: String,
        required: true
    },
    bathrooms: {
        type: String,
        required: true
    },
    sqft: {
        type: String,
        required: true
    },
    timePosted: {
        type: Date, 
        default: Date.now 
    },
    media: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('home', HomeSchema);