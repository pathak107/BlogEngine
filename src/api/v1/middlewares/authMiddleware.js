const jwt = require('jsonwebtoken');
const { logger } = require('../../../config/logger');

const tokenVerification = (req) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const userData = jwt.verify(token, process.env.JWT_SECRET);
        return { valid: true, userData };
    } catch (error) {
        logger.error(error);
        return { valid: false };
    }
};

const adminVerify = (req, res, next) => {
    const token = tokenVerification(req);
    if (token.valid === true && token.userData.role === 'ADMIN') {
        req.userData = token.userData;
        next();
    } else {
        next(Error('User not authorized. Try logging in and try again.'));
    }
};

const editorVerify = (req, res, next) => {
    const token = tokenVerification(req);
    if (token.valid === true && token.userData.role === 'EDITOR') {
        req.userData = token.userData;
        next();
    } else {
        next(Error('User not authorized. Try logging in and try again.'));
    }
};

const editorOrAdminVerify = (req, res, next) => {
    const token = tokenVerification(req);
    if (token.valid === true && (token.userData.role === 'EDITOR' || token.userData.role === 'ADMIN')) {
        req.userData = token.userData;
        next();
    } else {
        next(Error('User not authorized. Try logging in and try again.'));
    }
};

module.exports = { adminVerify, editorVerify, editorOrAdminVerify };
