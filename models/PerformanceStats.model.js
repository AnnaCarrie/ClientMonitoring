const mongoose = require('mongoose');

const performanceStatsSchema = new mongoose.Schema({
    performance: {
        type: Number,
        required: true
    }
    }
);

const PerformanceStats = mongoose.model('PerformanceStats', performanceStatsSchema);

module.exports = PerformanceStats;

