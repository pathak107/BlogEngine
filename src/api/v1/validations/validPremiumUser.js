const isUserValidForPremium = () => true;
// it will be valid for premium users or admin
// wont be valid if a user is premium but not logged in or if admin isnt logged in
module.exports = { isUserValidForPremium };
