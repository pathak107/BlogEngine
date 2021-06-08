const Comment = require('../models/comment');

const getAllComments = async (postID) => {
    // with query parameter of postID to generate all comments of a post
    let query = {};
    if (postID !== undefined) {
        query = { post_id: postID };
    }
    const comments = await Comment.find(query);
    return comments;
};

const createComment = async (data, userIP) => {
    let commentData = {
        user_IP: userIP,
        post_id: data.post_id,
        comment: data.comment,
    };
    if (data.name) {
        commentData = { ...commentData, name: data.name };
    }
    let comment = new Comment(commentData);
    comment = await comment.save();
    return comment;
};

const deleteComment = async (commentID, userIP) => {
    const deleted = await Comment.deleteOne({ _id: commentID, user_IP: userIP });
    return deleted.deletedCount;
};

const editComment = async (commentID, editedComment, userIP) => {
    let comment = await Comment.findOne({ _id: commentID, user_IP: userIP });
    if (comment === null) {
        throw new Error('Comment does not exists.');
    }
    comment.comment = editedComment;

    comment = await comment.save();
    return comment;
};

module.exports = {
    createComment, getAllComments, deleteComment, editComment,
};
