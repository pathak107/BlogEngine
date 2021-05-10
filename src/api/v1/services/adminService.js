const jwt = require('jsonwebtoken');
const config = require('../../../../config.json');

const verifyAdmin = (email, password) => {
    if (email === config.admin.admin_email && password === config.admin.admin_password) {
        const token = jwt.sign({},
            config.admin.admin_password,
            {
                expiresIn: '30d',
            });
        return token;
    }
    return null;
};

const getSettings = () => config;

module.exports = { verifyAdmin, getSettings };
