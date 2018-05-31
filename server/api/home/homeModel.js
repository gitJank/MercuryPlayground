var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HomeSchema = new Schema({
    address: {
        type: String,
        required: true,
        unique: true
    },
    state: {
        type: String, 
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    media: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('home', HomeSchema);