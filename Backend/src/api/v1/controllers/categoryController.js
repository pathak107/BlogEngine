const categoryService = require('../services/categoryService');

const getAllCategories = async (req, res, next) => {
    let categories;
    try {
        categories = await categoryService.getAllCategories(req.query.fields);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        categories,
    });
};

const getCategory = async (req, res, next) => {
    let category;
    try {
        category = await categoryService.getCategory(req.params.catID, null, req.query.fields);
    } catch (error) {
        next(error);
        return res.end();
    }
    if (category === null) {
        return res.status(200).json({
            status: 'failure',
            message: 'Could not fetch the category',
        });
    }
    return res.status(200).json({
        status: 'success',
        category,
    });
};

const getCategoryBySlug = async (req, res, next) => {
    let category;
    try {
        category = await categoryService.getCategory(null, req.params.slug, req.query.fields);
    } catch (error) {
        next(error);
        return res.end();
    }
    if (category === null) {
        return res.status(200).json({
            status: 'failure',
            message: 'Could not fetch the category',
        });
    }
    return res.status(200).json({
        status: 'success',
        category,
    });
};

const deleteCategory = async (req, res, next) => {
    let isDeleted;
    try {
        isDeleted = await categoryService.deleteCategory(req.params.catID);
    } catch (error) {
        next(error);
        return res.end();
    }
    if (isDeleted) {
        return res.status(200).json({
            status: 'success',
            message: 'Successfully deleted the category.',
        });
    }
    return res.status(200).json({
        status: 'failure',
        message: 'category does not exists',
    });
};

const createCategory = async (req, res, next) => {
    let category;
    try {
        category = await categoryService.createCategory(req.body);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        category,
    });
};

const editCategory = async (req, res, next) => {
    let category;
    try {
        category = await categoryService.editCategory(req.params.catID, req.body);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        category,
    });
};

module.exports = {
    getAllCategories, getCategory, getCategoryBySlug, deleteCategory, editCategory, createCategory,
};
