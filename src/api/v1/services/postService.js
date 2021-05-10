const marked = require('marked');
const slugify = require('slugify');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const { window } = new JSDOM('');
const DOMPurify = createDOMPurify(window);

const Post = require('../models/post');

const fetchAllPosts = async (size, page, fields, published) => {
    let query;
    let promise;
    if (published !== undefined) {
        query = { published };
    }

    // if (fields !== undefined) {
    //     const select = fields.split(',').join(' ');
    //     post = await Post.findOne(query).select(select);
    // } else {
    //     post = await Post.findOne(query);
    // }

    // if (page === undefined || size === undefined) {
    //     promise=
    // }
    const posts = await Post.find({ query })
        .limit(size)
        .skip((page - 1) * size)
        .sort({ published_at: 'DESC' })
        .select(fields);
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
        // author: data.author_id,
        // category: data.category_id,
        feature_image: '/static/images/asd.jpeg',
        published_at: publishDate,
        premium: data.premium,
        published: data.published,
        codeinjection_head: data.codeinjection_head,
        codeinjection_foot: data.codeinjection_foot,
        canonical_url: data.canonical_url,
        send_email_when_published: data.send_email_when_published,
        url: `/posts/${slug}`,
        og_image_url: '/static/images/asd.jpeg',
        og_title: data.title,
        og_description: data.description,
        twitter_image: '/static/images/asd.jpeg',
        twitter_title: data.title,
        twitter_description: data.description,
        email_subject: data.email_subject,
    });
    post = await post.save();
    return post;
};

const fetchPost = async (postID, fields, slug) => {
    let query = {};
    if (slug === null && postID !== null) {
        query = { _id: postID };
    } else {
        query = { slug };
    }
    let post;
    if (fields !== undefined) {
        const select = fields.split(',').join(' ');
        post = await Post.findOne(query).select(select);
    } else {
        post = await Post.findOne(query);
    }
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
    // author: data.author_id,
    // category: data.category_id,
    post.feature_image = '/static/images/asd.jpeg';
    post.published_at = publishDate;
    post.premium = data.premium;
    post.published = data.published;
    post.codeinjection_head = data.codeinjection_head;
    post.codeinjection_foot = data.codeinjection_foot;
    post.canonical_url = data.canonical_url;
    post.send_email_when_published = data.send_email_when_published;
    post.url = `/posts/${slug}`;
    post.og_image_url = '/static/images/asd.jpeg';
    post.og_title = data.title;
    post.og_description = data.description;
    post.twitter_image = '/static/images/asd.jpeg';
    post.twitter_title = data.title;
    post.twitter_description = data.description;
    post.email_subject = data.email_subject;
    post = await post.save();
    return post;
};

const togglePublish = async (postID) => {
    const post = await Post.findById(postID);
    if (post == null) {
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
module.exports = {
    fetchAllPosts, newPost, deletePost, fetchPost, editPost, togglePublish,
};
