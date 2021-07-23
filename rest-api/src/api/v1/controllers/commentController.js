const commentService = require('../services/commentService');

const getAllComments = async (req, res, next) => {
    let comments;
    try {
        comments = await commentService.getAllComments(req.query.postID);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        comments,
    });
};

const createComment = async (req, res, next) => {
    let comment;
    try {
        comment = await commentService.createComment(req.body, req.ip);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        comment,
    });
};

const deleteComment = async (req, res, next) => {
    let isDeleted;
    try {
        isDeleted = await commentService.deleteComment(req.params.commentID, req.ip);
    } catch (error) {
        next(error);
        return res.end();
    }
    if (isDeleted) {
        return res.status(200).json({
            status: 'success',
            message: 'Successfully deleted the comment',
        });
    }
    return res.status(401).json({
        status: 'failure',
        message: 'Not Authorized',
    });
};

const editComment = async (req, res, next) => {
    let comment;
    try {
        comment = await commentService.editComment(req.params.commentID, req.body.comment, req.ip);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        comment,
    });
};

module.exports = {
    createComment, getAllComments, deleteComment, editComment,
};
