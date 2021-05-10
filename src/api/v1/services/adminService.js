const jwt = require('jsonwebtoken');
const { promises: fs } = require('fs');
const path = require('path');
const config = require('../../../../config.json');
const validator = require('../validations/validConfig');

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

const editSettings = async (newConfig) => {
    const filePath = '../../../../config.json';
    const isValid = validator.isConfigValid(config, newConfig);
    if (!isValid) {
        throw new Error('Config format is not supported');
    }
    try {
        await fs.writeFile(path.join(__dirname, filePath), JSON.stringify(newConfig, null, 2));
    } catch (error) {
        throw new Error('Some error occured while updating config file');
    }
};

module.exports = { verifyAdmin, getSettings, editSettings };
