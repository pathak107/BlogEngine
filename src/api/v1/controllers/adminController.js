const adminService = require('../services/adminService');
const postService = require('../services/postService');
const settingsService = require('../services/settingsService');
const imageProcessing = require('../helpers/imageProcessing');

const register = async (req, res, next) => {
    const { name, email, password } = req.body;
    let token;
    try {
        token = await adminService.registerUser(name, email, password);
    } catch (error) {
        next(error);
    }

    if (token !== null) {
        return res.status(200).json({
            status: 'success',
            token,
        });
    }
    return res.status(200).json({
        status: 'failure',
        error: 'Some error occured',
    });
};

const login = async (req, res, next) => {
    const { email, password } = req.body;
    let token;
    try {
        token = await adminService.verifyUser(email, password);
    } catch (error) {
        next(error);
    }
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

const getSettings = async (req, res) => {
    const settings = await settingsService.loadSettings();
    return res.status(200).json({
        status: 'success',
        settings,
    });
};

const createSettings = async (req, res, next) => {
    try {
        await settingsService.createSettings(req.body);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        message: 'settings were created successfully',
    });
};

const editSettings = async (req, res, next) => {
    try {
        await settingsService.editSettings(req.body);
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
        size, page, fields, authorID, categoryID, include, published, sort,
    } = req.query;
    let posts;
    try {
        posts = await postService.fetchAllPosts(
            size, page, fields, published, authorID, categoryID, include, sort,
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

const uploadImage = async (req, res, next) => {
    const filename = `${Date.now()}`;
    try {
        await imageProcessing.compressImage(req.file.buffer, filename);
        await settingsService.uploadImage(filename);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        message: 'uploaded image successfully',
    });
};

const uploadLogo = async (req, res, next) => {
    const filename = `${Date.now()}`;
    try {
        await imageProcessing.compressLogo(req.file.buffer, filename);
        await settingsService.uploadLogo(filename);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        message: 'uploaded logo successfully',
    });
};

module.exports = {
    register,
    login,
    getSettings,
    editSettings,
    getAllPosts,
    createSettings,
    uploadImage,
    uploadLogo,
};
