// to store the types of subscription and their data
// like monthly fee or yearly fee, description
// Benefits etc.

const { Schema, model } = require('mongoose');

const subscriptionSchema = new Schema({
    cost_per_month: Number,
    number_of_months: Number, // yearly (12 months) or monthly(like every 3 months or every 6 month)
    description: String, // sanitized html after markdown,
    one_time_cost: Number, // The total cost user has to pay upfront

});

const subscription = model('Subscription', subscriptionSchema);

module.exports = subscription;
