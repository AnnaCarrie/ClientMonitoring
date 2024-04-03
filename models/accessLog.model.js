const mongoose = require('mongoose');

const accessLogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    ipAddress: {
        type: String,
        required: true
    },
    accessDateTime: {
        type: Date,
        required: true,
        default: Date.now
    },
    requestedUrl: {
        type: String,
        required: true
    },
    httpStatusCode: {
        type: Number,
        required: true
    }
});

const AccessLog = mongoose.model('AccessLog', accessLogSchema);

module.exports = AccessLog;
