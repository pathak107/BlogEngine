const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    slug: { type: String, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    html: String,
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
    feature_image_url: String,
    feature_image_slug: String,
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
    codeinjection_head: String,
    codeinjection_foot: String,
    canonical_url: String,
    send_email_when_published: Boolean,
    // urls will always be of the form /post/:id not the entire https://blog.com/post/:id as
    // the domain can change in future. Also even if we maintain the url in config.json
    // but the post that are already created will still have old urls
    // same for any other image url etc
    url: String,
    og_image_url: String,
    og_title: String,
    og_description: String,
    twitter_image: String,
    twitter_title: String,
    twitter_description: String,
    email_subject: String,
});

const post = model('Post', postSchema);

module.exports = post;
