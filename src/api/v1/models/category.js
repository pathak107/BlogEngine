const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    slug: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    feature_image: String,
    og_image: String,
    og_title: String,
    og_description: String,
    twitter_image: String,
    twitter_title: String,
    twitter_description: String,
    codeinjection_head: String,
    codeinjection_foot: String,
    canonical_url: String,
    url: String,
});

const category = model('Category', categorySchema);

module.exports = category;
