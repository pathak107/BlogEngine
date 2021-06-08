const postService = require('../services/postService');
const imageProcessing = require('../helpers/imageProcessing');

const getAllPosts = async (req, res, next) => {
    const {
        size, page, fields, authorID, categoryID, include, sort,
    } = req.query;
    const published = true; // because client should not have access to drafts
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

const getPost = async (req, res, next) => {
    const { fields, include } = req.query;
    let post;
    try {
        post = await postService.fetchPost(req.params.postID, fields, null, include);
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

const uploadImage = async (req, res, next) => {
    const filename = `${Date.now()}`;
    try {
        await imageProcessing.compressImage(req.file.buffer, filename);
        await postService.uploadImage(req.params.postID, filename);
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
    getAllPosts,
    createPost,
    deletePost,
    editPost,
    getPost,
    getPostBySlug,
    togglePublish,
    uploadImage,
};
