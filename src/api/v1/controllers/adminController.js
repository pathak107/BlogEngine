const adminService = require('../services/adminService');

const login = (req, res) => {
    const { email, password } = req.body;
    const token = adminService.verifyAdmin(email, password);
    if (token !== null) {
        return res.status(200).json({
            status: 'success',
            token,
        });
    }
    return res.status(200).json({
        status: 'failure',
        error: 'Incorrect email or password.',
    });
};

const getSettings = (req, res) => {
    const config = adminService.getSettings();
    return res.status(200).json({
        status: 'success',
        settings: config,
    });
};

module.exports = { login, getSettings };
