const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    slug: String,
    name: String,
    description: String,
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
// "Category":
//     {
//       "slug": "getting-started",
//       "id": "5ddc9063c35e7700383b27e0",
//       "name": "Getting Started",
//       "description": null,
//       "feature_image": null,
//       "visibility": "public",
//       "meta_title": null,
//       "meta_description": null,
//       "og_image": null,
//       "og_title": null,
//       "og_description": null,
//       "twitter_image": null,
//       "twitter_title": null,
//       "twitter_description": null,
//       "codeinjection_head": null,
//       "codeinjection_foot": null,
//       "canonical_url": null,
//       "accent_color": null,
//       "url": "https://docs.ghost.io/tag/getting-started/"
//     }
