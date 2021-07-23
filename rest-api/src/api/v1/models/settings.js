const { Schema, model } = require('mongoose');

const settingSchema = new Schema({
    title: { type: String, default: null },
    description: { type: String, default: null },
    url: { type: String, default: null },
    logo_filename: { type: String, default: null },
    logo_url: { type: String, default: null },
    cover_image_filename: { type: String, default: null },
    cover_image_url: { type: String, default: null },
    codeinjection_head: { type: String, default: null },
    codeinjection_foot: { type: String, default: null },
    // meta tags for social media
    og_image: { type: String, default: null },
    og_title: { type: String, default: null },
    og_description: { type: String, default: null },
    twitter_image: { type: String, default: null },
    twitter_title: { type: String, default: null },
    twitter_description: { type: String, default: null },
    // social media handles
    social_facebook: { type: String, default: null },
    social_twitter: { type: String, default: null },
    social_instagram: { type: String, default: null },
    social_linkedin: { type: String, default: null },
    social_email: { type: String, default: null },
    // emailing service settings
    email_api_key: { type: String, default: null },
    email_host: { type: String, default: null },
    email_username: { type: String, default: null },
    email_password: { type: String, default: null },
});

module.exports = model('Settings', settingSchema);
