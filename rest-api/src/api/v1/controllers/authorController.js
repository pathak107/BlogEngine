const authorService = require('../services/authorService');

const getAllAuthors = async (req, res, next) => {
    let authors;
    try {
        authors = await authorService.getAllAuthors(req.query.fields);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        authors,
    });
};

const getAuthor = async (req, res, next) => {
    let author;
    try {
        author = await authorService.getAuthor(req.params.authorID, null, req.query.fields);
    } catch (error) {
        next(error);
        return res.end();
    }
    if (author === null) {
        return res.status(200).json({
            status: 'failure',
            message: 'Could not fetch the author',
        });
    }
    return res.status(200).json({
        status: 'success',
        author,
    });
};

const getAuthorBySlug = async (req, res, next) => {
    let author;
    try {
        author = await authorService.getAuthor(null, req.params.slug, req.query.fields);
    } catch (error) {
        next(error);
        return res.end();
    }
    if (author === null) {
        return res.status(200).json({
            status: 'failure',
            message: 'Could not fetch the author',
        });
    }
    return res.status(200).json({
        status: 'success',
        author,
    });
};

const deleteAuthor = async (req, res, next) => {
    let isDeleted;
    try {
        isDeleted = await authorService.deleteAuthor(req.params.authorID);
    } catch (error) {
        next(error);
        return res.end();
    }
    if (isDeleted) {
        return res.status(200).json({
            status: 'success',
            message: 'Successfully deleted the author.',
        });
    }
    return res.status(200).json({
        status: 'failure',
        message: 'author does not exists',
    });
};

const createAuthor = async (req, res, next) => {
    let author;
    try {
        author = await authorService.createAuthor(req.body);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        author,
    });
};

const editAuthor = async (req, res, next) => {
    let author;
    try {
        author = await authorService.editAuthor(req.params.authorID, req.body);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        author,
    });
};

module.exports = {
    getAllAuthors, getAuthor, getAuthorBySlug, deleteAuthor, editAuthor, createAuthor,
};
