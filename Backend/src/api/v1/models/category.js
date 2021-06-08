const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    slug: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    feature_image: { type: String, default: null },
    og_image: { type: String, default: null },
    og_title: { type: String, default: null },
    og_description: { type: String, default: null },
    twitter_image: { type: String, default: null },
    twitter_title: { type: String, default: null },
    twitter_description: { type: String, default: null },
    codeinjection_head: { type: String, default: null },
    codeinjection_foot: { type: String, default: null },
    canonical_url: { type: String, default: null },
    url: { type: String, default: null },
});

const category = model('Category', categorySchema);

module.exports = category;
