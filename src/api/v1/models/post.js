const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    slug: { type: String, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    html: { type: String, required: true },
    markdown: { type: String, required: true },
    reading_time: { type: String, required: true },
    views: {
        type: Number,
        default: 0,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        default: null,
    }, // an option in post api to specify auhor id to get all posts.
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    }, // an option in post api specify category id to get all posts
    feature_image_url: { type: String, default: null },
    feature_image_slug: { type: String, default: null },
    premium: {
        type: Boolean,
        default: false,
    },
    published: {
        type: Boolean,
        default: true,
    },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
    published_at: Date,
    codeinjection_head: { type: String, default: null },
    codeinjection_foot: { type: String, default: null },
    canonical_url: { type: String, default: null },
    send_email_when_published: {
        type: Boolean,
        default: false,
    },
    // urls will always be of the form /post/:id not the entire https://blog.com/post/:id as
    // the domain can change in future. Also even if we maintain the url in config.json
    // but the post that are already created will still have old urls
    // same for any other image url etc
    url: { type: String, default: null },
    og_image_url: { type: String, default: null },
    og_title: { type: String, default: null },
    og_description: { type: String, default: null },
    twitter_image: { type: String, default: null },
    twitter_title: { type: String, default: null },
    twitter_description: { type: String, default: null },
    email_subject: { type: String, default: null },
});

const post = model('Post', postSchema);

module.exports = post;
