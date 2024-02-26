const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true,
    },
    airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
    },
    flightNum: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 9999,
    },
    departs: {
    type: Date,
    required: true,
    default: () => new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // One year from date created
    },
});

// Compile the schema into a model and export it
module.exports = mongoose.model('flight', flightSchema);









































// Compile the schema into a model and export it
module.exports = mongoose.model('flight', flightSchema);