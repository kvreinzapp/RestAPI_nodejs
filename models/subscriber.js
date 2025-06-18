const mongoose = require('mongoose');
const Subscriber = require('../routes/subscribers');

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true,
    },
    subscribedToChannel: {
        type: String,
        requried: true,
    },
    subscribeDate: {
        type: Date,
        requried: true,
        default: Date.now,
    }
});



module.exports = mongoose.model('subscriber', subscriberSchema);