const { Schema, model } = require('mongoose');

const authorSchema = new Schema({
    slug: String,
    name: String,
    profile_image: String, // url
    bio: String,
    website: String, // url
    facebook: String,
    twitter: String,
    url: String, // url to the author's page if there's a page for him
});

const author = model('Author', authorSchema);

model.export = author;
// "authors": [
//     {
//       "slug": "cameron",
//       "id": "5ddc9b9510d8970038255d02",
//       "name": "Cameron Almeida",
//       "profile_image": "https://docs.ghost.io/content/images/2019/03/1c2f492a-a5d0-4d2d-b350-cdcdebc7e413.jpg",
//       "cover_image": null,
//       "bio": "Editor at large.",
//       "website": "https://example.com",
//       "location": "Cape Town",
//       "facebook": "example",
//       "twitter": "@example",
//       "meta_title": null,
//       "meta_description": null,
//       "url": "https://docs.ghost.io/author/cameron/"
//     }
