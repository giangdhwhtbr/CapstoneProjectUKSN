"use strict";

const mongoose = require('mongoose');
// const textSearch = require('mongoose-text-search');
var Schema = mongoose.Schema;

const _requestSchema = new Schema ({
    user: { type: String, required: true },
    title: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
    description: { type: String, required: true, trim: true },
    status: { type: String, default: 'pending' },
    updatedAt: { type: Date, default: Date.now },
    knowledgeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Knowledge',required: true },
    subscribers: [String],
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: "Tag", childPath: "request"}]
});

//  _requestSchema.plugin(textSearch);

_requestSchema.index({
    description: 'text',
    title: 'text'
});

module.exports = (_requestSchema);
