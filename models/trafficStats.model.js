const mongoose = require('mongoose');

const trafficStatsSchema = new mongoose.Schema({
    pageViews: {
        type: Number,
        required: true
    },

});

const TrafficStats = mongoose.model('TrafficStats', trafficStatsSchema);

module.exports = TrafficStats;
