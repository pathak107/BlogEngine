const postService = require('../services/postService');

const getAllPosts = async (req, res, next) => {
    const {
        size, page, fields, published, premium, authorID, categoryID,
    } = req.query;
    let posts;
    try {
        posts = await postService.fetchAllPosts(
            size, page, fields, published, premium, authorID, categoryID,
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

const getPost = async (req, res, next) => {
    const { fields } = req.query;
    let post;
    try {
        post = await postService.fetchPost(req.params.postID, fields, null);
    } catch (error) {
        next(error);
        return res.end();
    }
    if (post === null) {
        return res.status(200).json({
            status: 'failure',
            message: 'Could not fetch the post',
        });
    }
    return res.status(200).json({
        status: 'success',
        post,
    });
};

const getPostBySlug = async (req, res, next) => {
    const { fields } = req.query;
    let post;
    try {
        post = await postService.fetchPost(null, fields, req.params.slug);
    } catch (error) {
        next(error);
        return res.end();
    }
    if (post === null) {
        return res.status(200).json({
            status: 'failure',
            message: 'Could not fetch the post',
        });
    }
    return res.status(200).json({
        status: 'success',
        post,
    });
};

const deletePost = async (req, res, next) => {
    let isDeleted;
    try {
        isDeleted = await postService.deletePost(req.params.postID);
    } catch (error) {
        next(error);
        return res.end();
    }
    if (isDeleted) {
        return res.status(200).json({
            status: 'success',
            message: 'Successfully deleted the post',
        });
    }
    return res.status(200).json({
        status: 'failure',
        message: 'post does not exists',
    });
};

const createPost = async (req, res, next) => {
    let post;
    try {
        post = await postService.newPost(req.body);
    } catch (error) {
        next(error);
        return res.end();
    }

    return res.status(200).json({
        status: 'success',
        post,
    });
};

const editPost = async (req, res, next) => {
    let post;
    try {
        post = await postService.editPost(req.params.postID, req.body);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        post,
    });
};

const togglePublish = async (req, res, next) => {
    try {
        await postService.togglePublish(req.params.postID);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        message: 'published/unpublished successfully',
    });
};

module.exports = {
    getAllPosts, createPost, deletePost, editPost, getPost, getPostBySlug, togglePublish,
};
