const { Schema, model } = require('mongoose');

const pageSchema = new Schema({
    slug: String,
    title: String,
    description: String,
    html: String,
    markdown: String,
    feature_image: String,
    published: {
        type: Boolean,
        default: true,
    },
    created_at: Date,
    updated_at: Date,
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

model.export = page;
