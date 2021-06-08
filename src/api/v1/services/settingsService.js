const path = require('path');
const { promises: fs } = require('fs');
const Settings = require('../models/settings');

// Should be updated at the creation of new settings and
// whenever settings is upadated
let settings;
// To be called if server restarts or something
const loadSettings = async () => {
    settings = await Settings.findOne({});
    return settings;
};

const createSettings = async (data) => {
    settings = new Settings({
        title: data.title,
        description: data.description,
        url: data.url,
        logo_filename: null,
        logo_url: null,
        cover_image_filename: null,
        cover_image_url: null,
        codeinjection_head: data.codeinjection_head,
        codeinjection_foot: data.codeinjection_foot,
        // meta tags for social media
        og_image: null,
        og_title: data.title,
        og_description: data.description,
        twitter_image: null,
        twitter_title: data.title,
        twitter_description: data.description,
        // social media handles
        social_facebook: data.social_facebook,
        social_twitter: data.social_twitter,
        social_instagram: data.social_instagram,
        social_linkedin: data.social_linkedin,
        social_email: data.social_email,
        // emailing service settings
        email_api_key: data.email_api_key,
        email_host: data.email_host,
        email_username: data.email_username,
        email_password: data.email_password,
    });
    settings.save();
};

const editSettings = async (data) => {
    settings.title = data.title;
    settings.description = data.description;
    settings.url = data.url;
    settings.codeinjection_head = data.codeinjection_head;
    settings.codeinjection_foot = data.codeinjection_foot;

    settings.og_title = data.title;
    settings.og_description = data.description;
    settings.twitter_title = data.title;
    settings.twitter_description = data.description;

    settings.social_facebook = data.social_facebook;
    settings.social_twitter = data.social_twitter;
    settings.social_instagram = data.social_instagram;
    settings.social_linkedin = data.social_linkedin;
    settings.social_email = data.social_email;

    settings.email_api_key = data.email_api_key;
    settings.email_host = data.email_host;
    settings.email_username = data.email_username;
    settings.email_password = data.email_password;
    settings.save();
};

const uploadImage = async (filename) => {
    if (!settings.cover_image_filename) {
        await fs.unlink(path.join(__dirname, `../../../public/uploads/${settings.cover_image_filename}`));
    }
    const url = `/static/uploads/${filename}`;
    settings.cover_image_filename = filename;
    settings.cover_image_url = url;
    settings.og_image = url;
    settings.twitter_image = url;
    await settings.save();
};

const uploadLogo = async (filename) => {
    if (!settings.logo_filename) {
        await fs.unlink(path.join(__dirname, `../../../public/uploads/${settings.logo_filename}`));
    }
    settings.logo_filename = filename;
    settings.logo_url = `/static/uploads/${filename}`;
    await settings.save();
};

module.exports = {
    settings,
    loadSettings,
    createSettings,
    editSettings,
    uploadImage,
    uploadLogo,
};
