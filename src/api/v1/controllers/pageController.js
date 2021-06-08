const pageService = require('../services/pageService');
const imageProcessing = require('../helpers/imageProcessing');

const getAllPages = async (req, res, next) => {
    const {
        size, page, fields,
    } = req.query;
    const published = true; // because client should not have access to drafts
    let pages;
    try {
        pages = await pageService.fetchAllPages(
            size, page, fields, published,
        );
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        pages,
    });
};

const getPage = async (req, res, next) => {
    const { fields } = req.query;
    let page;
    try {
        page = await pageService.fetchPage(req.params.pageID, fields, null);
    } catch (error) {
        next(error);
        return res.end();
    }
    if (page === null) {
        return res.status(200).json({
            status: 'failure',
            message: 'Could not fetch the page',
        });
    }
    return res.status(200).json({
        status: 'success',
        page,
    });
};

const getPageBySlug = async (req, res, next) => {
    const { fields } = req.query;
    let page;
    try {
        page = await pageService.fetchPage(null, fields, req.params.slug);
    } catch (error) {
        next(error);
        return res.end();
    }
    if (page === null) {
        return res.status(200).json({
            status: 'failure',
            message: 'Could not fetch the page',
        });
    }
    return res.status(200).json({
        status: 'success',
        page,
    });
};

const deletePage = async (req, res, next) => {
    let isDeleted;
    try {
        isDeleted = await pageService.deletepage(req.params.pageID);
    } catch (error) {
        next(error);
        return res.end();
    }
    if (isDeleted) {
        return res.status(200).json({
            status: 'success',
            message: 'Successfully deleted the page',
        });
    }
    return res.status(200).json({
        status: 'failure',
        message: 'page does not exists',
    });
};

const createPage = async (req, res, next) => {
    let page;
    try {
        page = await pageService.newpage(req.body);
    } catch (error) {
        next(error);
        return res.end();
    }

    return res.status(200).json({
        status: 'success',
        page,
    });
};

const editPage = async (req, res, next) => {
    let page;
    try {
        page = await pageService.editpage(req.params.pageID, req.body);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        page,
    });
};

const togglePublish = async (req, res, next) => {
    try {
        await pageService.togglePublish(req.params.pageID);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        message: 'published/unpublished successfully',
    });
};

const uploadImage = async (req, res, next) => {
    const filename = `${Date.now()}`;
    try {
        await imageProcessing.compressImage(req.file.buffer, filename);
        await pageService.uploadImage(req.params.pageID, filename);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        message: 'uploaded image successfully',
    });
};

module.exports = {
    getAllPages,
    createPage,
    deletePage,
    editPage,
    getPage,
    getPageBySlug,
    togglePublish,
    uploadImage,
};
