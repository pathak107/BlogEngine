const { Schema, model } = require('mongoose');

const pageSchema = new Schema({
    slug: { type: String, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    html: { type: String, required: true },
    markdown: { type: String, required: true },
    feature_image_url: { type: String, default: null },
    feature_image_slug: { type: String, default: null },
    published: {
        type: Boolean,
        default: true,
    },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
    published_at: Date,
    codeinjection_head: String,
    codeinjection_foot: String,
    canonical_url: String,
    url: String,
    og_image_url: String,
    og_title: String,
    og_description: String,
    twitter_image: String,
    twitter_title: String,
    twitter_description: String,
});

const page = model('Page', pageSchema);

module.exports = page;
