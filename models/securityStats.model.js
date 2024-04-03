const mongoose = require('mongoose');

const securityStatsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    Event: {
        type: String,
        required: true
    },
    Severity: {
        type: String,
        required: true
    },
    Action: {
        type: String,
        required: true
    }
});

const SecurityStats = mongoose.model('SecurityStats', securityStatsSchema);

module.exports = SecurityStats;
