const slugify = require('slugify');
const Author = require('../models/author');

const getAllAuthors = async (fields) => {
    let promise = Author.find();
    if (fields !== undefined) {
        const select = fields.split(',').join(' ');
        promise = promise.select(select);
    }
    const authors = await promise;
    return authors;
};

const getAuthor = async (authorID, slug, fields) => {
    let query = {};
    if (authorID !== null) {
        query = { _id: authorID };
    } else {
        query = { slug };
    }
    let promise = Author.findOne(query);
    if (fields !== undefined) {
        const select = fields.split(',').join(' ');
        promise = promise.select(select);
    }
    const author = await promise;
    return author;
};

const deleteAuthor = async (authorID) => {
    const deleted = await Author.deleteOne({ _id: authorID });
    return deleted.deletedCount;
};

const createAuthor = async (data) => {
    const slug = slugify(data.name);
    let author = new Author({
        slug,
        name: data.name,
        bio: data.bio,
        instagram: data.instagram, // url
        facebook: data.facebook,
        twitter: data.twitter,
        url: data.url,
    });
    author = await author.save();
    return author;
};

const editAuthor = async (authorID, data) => {
    const slug = slugify(data.name);
    let author = await Author.findById(authorID);
    if (author === null) {
        throw new Error('Author does not exists.');
    }
    author.slug = slug;
    author.name = data.name;
    author.bio = data.bio;
    author.instagram = data.instagram;
    author.facebook = data.facebook;
    author.twitter = data.twitter;
    author.url = data.url;

    author = await author.save();
    return author;
};

module.exports = {
    getAllAuthors, getAuthor, deleteAuthor, createAuthor, editAuthor,
};
