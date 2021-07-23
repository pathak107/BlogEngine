const marked = require('marked');
const slugify = require('slugify');
const createDOMPurify = require('dompurify');
const path = require('path');
const { promises: fs } = require('fs');
const { JSDOM } = require('jsdom');
const { window } = new JSDOM('');
const DOMPurify = createDOMPurify(window);

const Post = require('../models/post');

const fetchAllPosts = async (
    size, page, fields, published, authorID, categoryID, include, sort,
) => {
    let query = {};
    if (published !== undefined) {
        query = { published };
    }
    if (authorID !== undefined) {
        query = { ...query, author: authorID };
    }

    if (categoryID !== undefined) {
        query = { ...query, category: categoryID };
    }

    let select = '-html -markdown';
    if (fields !== undefined) {
        select = fields.split(',').filter((field) => (field !== 'html' && field !== 'markdown')).join(' ');
    }

    let sortQuery = { published_at: 'DESC' };
    if (sort === 'views') {
        sortQuery = { view: 'DESC' };
    }
    let promise = Post.find(query).sort(sortQuery).select(select);

    if (include !== undefined) {
        const populate = include.split(',').join(' ');
        promise = promise.populate(populate);
    }

    if (page !== undefined && size !== undefined) {
        promise = promise
            .limit(parseInt(size, 10))
            .skip((parseInt(page, 10) - 1) * size);
    }
    const posts = await promise;
    return posts;
};

const newPost = async (data) => {
    const sanitizedHtml = DOMPurify.sanitize(marked(data.markdown));
    const slug = slugify(data.title);
    let publishDate = null;
    if (data.published === true) {
        publishDate = Date.now();
    }
    let post = new Post({
        slug,
        title: data.title,
        description: data.description,
        html: sanitizedHtml,
        markdown: data.markdown,
        reading_time: data.reading_time,
        author: data.author_id,
        category: data.category_id,
        feature_image_url: null,
        feature_image_slug: null,
        published_at: publishDate,
        published: data.published,
        codeinjection_head: data.codeinjection_head,
        codeinjection_foot: data.codeinjection_foot,
        canonical_url: data.canonical_url,
        send_email_when_published: data.send_email_when_published,
        url: `/posts/${slug}`,
        og_image_url: null,
        og_title: data.title,
        og_description: data.description,
        twitter_image: null,
        twitter_title: data.title,
        twitter_description: data.description,
        email_subject: data.email_subject,
    });
    post = await post.save();
    return post;
};

const fetchPost = async (postID, fields, slug, include) => {
    let query = {};
    if (slug === null && postID !== null) {
        query = { _id: postID };
    } else {
        query = { slug };
    }
    let promise = Post.findOne(query);
    if (include !== undefined) {
        const populate = include.split(',').join(' ');
        promise = promise.populate(populate);
    }
    if (fields !== undefined) {
        const select = fields.split(',').join(' ');
        promise = promise.select(select);
    }
    const post = await promise;

    post.views += 1;
    post.save();
    return post;
};

const deletePost = async (postID) => {
    const post = await Post.deleteOne({ _id: postID });
    return post.deletedCount;
};

const editPost = async (postID, data) => {
    let post = await Post.findById(postID);
    if (post == null) {
        throw Error('Post does not exist.');
    }
    const sanitizedHtml = DOMPurify.sanitize(marked(data.markdown));
    const slug = slugify(data.title);
    let publishDate = null;
    if (data.published === true) {
        publishDate = Date.now();
    }
    post.slug = slug;
    post.title = data.title;
    post.description = data.description;
    post.html = sanitizedHtml;
    post.markdown = data.markdown;
    post.reading_time = data.reading_time;
    post.author = data.author_id;
    post.category = data.category_id;
    post.published_at = publishDate;
    post.published = data.published;
    post.updated_at = Date.now();
    post.codeinjection_head = data.codeinjection_head;
    post.codeinjection_foot = data.codeinjection_foot;
    post.canonical_url = data.canonical_url;
    post.send_email_when_published = data.send_email_when_published;
    post.url = `/posts/${slug}`;
    post.og_title = data.title;
    post.og_description = data.description;
    post.twitter_title = data.title;
    post.twitter_description = data.description;
    post.email_subject = data.email_subject;
    post = await post.save();
    return post;
};

const togglePublish = async (postID) => {
    const post = await Post.findById(postID);
    if (post === null) {
        throw new ErrorEvent('post does not exists');
    }
    if (post.published === true) {
        post.published = false;
        post.published_at = null;
    } else {
        post.published = true;
        post.published_at = Date.now();
    }
    await post.save();
};

const uploadImage = async (postID, filename) => {
    const post = await Post.findById(postID);
    if (post === null) {
        throw new Error('post does not exists');
    }

    if (post.feature_image_slug !== null) {
        await fs.unlink(path.join(__dirname, `../../../public/uploads/${post.feature_image_slug}.jpeg`));
    }
    post.feature_image_url = `/static/uploads/${filename}`;
    post.feature_image_slug = filename;
    post.og_image_url = `/static/uploads/${filename}`;
    post.twitter_image = `/static/uploads/${filename}`;
    await post.save();
};
module.exports = {
    fetchAllPosts, newPost, deletePost, fetchPost, editPost, togglePublish, uploadImage,
};
