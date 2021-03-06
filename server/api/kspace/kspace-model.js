//long

"use strict";

const mongoose = require('mongoose');

const KSpaceSchema = new mongoose.Schema({
    lecturer: {
        type: String,
        required: true
    },
    learners: [{
        type: String,
        required: true
    }],
    chatlog: [
        {
            createdAt: {
                type: Date
            },
            createdUser: {
                type: String
            },
            message: {
                type: String
            },
            dataURL: {
                type: String
            }
        }
    ],
    boards: [
        {
            createdAt: {type: Date},
            boardJson: {type: String},
            dataURL: {type: String},
            name: {type: String},
            description: {type:String}
        }
    ],
    reviews: [
        {
            createdAt: {
                type: Date
            },
            createdUser: {
                type: String
            },
            content: {
                type: String
            },
            rate: {
                type: Number,
                min: 1,
                max: 5
            }
        }
    ],
    rateAve: {
        type: Number,
        rate: {
            type: Number,
            min: 1,
            max: 5
        }
    },
    requestId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Request',
        required: true
    },
    requestTitle: {
        type: String,
        required: true
    },
    offerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Offer',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    finishedAt: {
        type: Date
    },
    articleIds: [{type: String}],
    tags: [{
        type: String
    }]

});
module.exports = KSpaceSchema;

