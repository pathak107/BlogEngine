const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, default: null },
    post_id: { type: Schema.Types.ObjectId, required: true },
    name: {
        type: String,
        default: 'Anonymous',
    },
    comment: { type: String, required: true }, // sanitized html from quill js editor
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
});

const comment = model('Comment', commentSchema);

module.exports = comment;
