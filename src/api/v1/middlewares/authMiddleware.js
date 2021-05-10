const jwt = require('jsonwebtoken');
const config = require('../../../../config.json');
const { logger } = require('../../../config/logger');

const adminVerify = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, config.admin.admin_password);
        req.adminData = decoded;
        next();
    } catch (error) {
        logger.error(error);
        next(Error('User not authenticated. Try logging in and try again.'));
    }
};

module.exports = { adminVerify };
