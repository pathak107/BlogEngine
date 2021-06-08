// User database for members, intially can implement just the email feature
// as it will already have the email of user but later
// it will help to include premium features for selected users only who have paid
// for some subscription
// ex a subscription variable which will determine the validity and a
// premiumUser variable for true or false and will mail notification to premiumUsers
// when a new premium post is posted
// Will alos store an end_date of subscription to find out whether the subsctiption is valid or not
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, default: null, required: true },
    // Two roles will be ther 'Admin' and 'Editor'
    // Editor will only have the access to create or edit a post
    role: {
        type: String, default: 'EDITOR',
    },
});

const user = model('User', userSchema);

module.exports = user;
