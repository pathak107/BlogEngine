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

const createComment = async (data, userData) => {
    let commentData = {
        post_id: data.post_id,
        comment: data.comment,
    };
    if (userData !== undefined) {
        commentData = { ...commentData, name: userData.name, user_id: userData.userID };
    }
    let comment = new Comment(commentData);
    comment = await comment.save();
    return comment;
};

module.exports = { createComment, getAllComments };
