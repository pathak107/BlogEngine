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

const editSettings = async (req, res, next) => {
    try {
        await adminService.editSettings(req.body.settings);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        message: 'settings were updated successfully',
    });
};

module.exports = { login, getSettings, editSettings };
