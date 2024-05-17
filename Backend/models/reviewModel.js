const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Name is required field!'],
    },
    content: {
        type: String,
        required: [true, 'Description is required field!'],
    },
    dateTime: {
      type: Date,
      default: Date.now()
    },
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

const reviews = mongoose.model('reviews', reviewSchema);

module.exports = reviews;