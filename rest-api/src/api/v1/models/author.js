const { Schema, model } = require('mongoose');

const authorSchema = new Schema({
    slug: { type: String, unique: true },
    name: { type: String, required: true },
    bio: { type: String, required: true },
    instagram: { type: String, default: null }, // url
    facebook: { type: String, default: null },
    twitter: { type: String, default: null },
    url: { type: String, default: null }, // url to the author's page if there's a page for him
});

const author = model('Author', authorSchema);

module.exports = author;
