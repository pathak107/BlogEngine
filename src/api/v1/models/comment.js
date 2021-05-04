const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    name: {
        type: String,
        default: 'Anonymous',
    },
    comment: String, // sanitized html from quill js editor
    created_at: Date,
    updated_at: Date,
});

const comment = model('Category', commentSchema);

model.export = comment;
