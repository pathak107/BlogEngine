const adminService = require('../services/adminService');
const postService = require('../services/postService');

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

const getAllPosts = async (req, res, next) => {
    const {
        size, page, fields, premium, authorID, categoryID, include, published,
    } = req.query;
    let posts;
    try {
        posts = await postService.fetchAllPosts(
            size, page, fields, published, premium, authorID, categoryID, include,
        );
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        posts,
    });
};

module.exports = {
    login, getSettings, editSettings, getAllPosts,
};
