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
    feature_image: { type: String, required: true },
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
// {
//     "posts": [
//       {
//         "slug": "welcome-short",
//         "id": "5ddc9141c35e7700383b2937",
//         "uuid": "a5aa9bd8-ea31-415c-b452-3040dae1e730",
//         "title": "Welcome",
//         "html": "<p>👋 Welcome, it's great to have you here.</p>",
//         "comment_id": "5ddc9141c35e7700383b2937",
//         "feature_image": "https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png",
//         "featured": false,
//         "visibility": "public",
//         "created_at": "2019-11-26T02:43:13.000+00:00",
//         "updated_at": "2019-11-26T02:44:17.000+00:00",
//         "published_at": "2019-11-26T02:44:17.000+00:00",
//         "custom_excerpt": null,
//         "codeinjection_head": null,
//         "codeinjection_foot": null,
//         "custom_template": null,
//         "canonical_url": null,
//         "send_email_when_published": false,
//         "url": "https://docs.ghost.io/welcome-short/",
//         "excerpt": "👋 Welcome, it's great to have you here.",
//         "reading_time": 0,
//         "access": true,
//         "og_image": null,
//         "og_title": null,
//         "og_description": null,
//         "twitter_image": null,
//         "twitter_title": null,
//         "twitter_description": null,
//         "meta_title": null,
//         "meta_description": null,
//         "email_subject": null
//       }
//     ]
//   }

// {
//     "posts": [
//       {
//         "slug": "welcome-short",
//         "id": "5c7ece47da174000c0c5c6d7",
//         "uuid": "3a033ce7-9e2d-4b3b-a9ef-76887efacc7f",
//         "title": "Welcome",
//         "html": "<p>👋 Welcome, it's great to have you here.</p>",
//         "comment_id": "5c7ece47da174000c0c5c6d7",
//         "feature_image": "https://casper.ghost.org/v2.0.0/images/welcome-to-ghost.jpg",
//         "featured": false,
//         "page": false,
//         "meta_title": null,
//         "meta_description": null,
//         "created_at": "2019-03-05T19:30:15.000+00:00",
//         "updated_at": "2019-03-26T19:45:31.000+00:00",
//         "published_at": "2012-11-27T15:30:00.000+00:00",
//         "custom_excerpt": "Welcome, it's great to have you here.",
//         "codeinjection_head": null,
//         "codeinjection_foot": null,
//         "og_image": null,
//         "og_title": null,
//         "og_description": null,
//         "twitter_image": null,
//         "twitter_title": null,
//         "twitter_description": null,
//         "custom_template": null,
//         "canonical_url": null,
//         "authors": [
//           {
//             "id": "5951f5fca366002ebd5dbef7",
//             "name": "Ghost",
//             "slug": "ghost",
//             "profile_image": "https://demo.ghost.io/content/images/2017/07/ghost-icon.png",
//             "cover_image": null,
//             "bio": "The professional publishing platform",
//             "website": "https://ghost.org",
//             "location": null,
//             "facebook": "ghost",
//             "twitter": "@tryghost",
//             "meta_title": null,
//             "meta_description": null,
//             "url": "https://demo.ghost.io/author/ghost/"
//           }
//         ],
//         "tags": [
//           {
//             "id": "59799bbd6ebb2f00243a33db",
//             "name": "Getting Started",
//             "slug": "getting-started",
//             "description": null,
//             "feature_image": null,
//             "visibility": "public",
//             "meta_title": null,
//             "meta_description": null,
//             "url": "https://demo.ghost.io/tag/getting-started/"
//           }
//         ],
//         "primary_author": {
//           "id": "5951f5fca366002ebd5dbef7",
//           "name": "Ghost",
//           "slug": "ghost",
//           "profile_image": "https://demo.ghost.io/content/images/2017/07/ghost-icon.png",
//           "cover_image": null,
//           "bio": "The professional publishing platform",
//           "website": "https://ghost.org",
//           "location": null,
//           "facebook": "ghost",
//           "twitter": "@tryghost",
//           "meta_title": null,
//           "meta_description": null,
//           "url": "https://demo.ghost.io/author/ghost/"
//         },
//         "primary_tag": {
//           "id": "59799bbd6ebb2f00243a33db",
//           "name": "Getting Started",
//           "slug": "getting-started",
//           "description": null,
//           "feature_image": null,
//           "visibility": "public",
//           "meta_title": null,
//           "meta_description": null,
//           "url": "https://demo.ghost.io/tag/getting-started/"
//         },
//         "url": "https://demo.ghost.io/welcome-short/",
//         "excerpt": "Welcome, it's great to have you here."
//       }
//     ]
//   }
