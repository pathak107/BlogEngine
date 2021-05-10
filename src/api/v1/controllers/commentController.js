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
        comment = await commentService.createComment(req.body, req.userData);
    } catch (error) {
        next(error);
        return res.end();
    }
    return res.status(200).json({
        status: 'success',
        comment,
    });
};
module.exports = { createComment, getAllComments };
