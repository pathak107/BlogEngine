const marked = require('marked');
const slugify = require('slugify');
const createDOMPurify = require('dompurify');
const path = require('path');
const { promises: fs } = require('fs');
const { JSDOM } = require('jsdom');
const { window } = new JSDOM('');
const DOMPurify = createDOMPurify(window);

const Page = require('../models/pages');

const fetchAllPages = async (size, page, fields, published) => {
    let query = {};
    if (published !== undefined) {
        query = { published };
    }
    let select = '-html -markdown';
    if (fields !== undefined) {
        select = fields.split(',').filter((field) => (field !== 'html' && field !== 'markdown')).join(' ');
    }

    let promise = Page.find(query).sort({ published_at: 'DESC' }).select(select);

    if (page !== undefined && size !== undefined) {
        promise = promise
            .limit(parseInt(size, 10))
            .skip((parseInt(page, 10) - 1) * size);
    }
    const pages = await promise;
    return pages;
};

const newPage = async (data) => {
    const sanitizedHtml = DOMPurify.sanitize(marked(data.markdown));
    const slug = slugify(data.title);
    let publishDate = null;
    if (data.published === true) {
        publishDate = Date.now();
    }
    let page = new Page({
        slug,
        title: data.title,
        description: data.description,
        html: sanitizedHtml,
        markdown: data.markdown,
        feature_image_url: null,
        feature_image_slug: null,
        published_at: publishDate,
        published: data.published,
        codeinjection_head: data.codeinjection_head,
        codeinjection_foot: data.codeinjection_foot,
        canonical_url: data.canonical_url,
        url: `/pages/${slug}`,
        og_image_url: null,
        og_title: data.title,
        og_description: data.description,
        twitter_image: null,
        twitter_title: data.title,
        twitter_description: data.description,
    });
    page = await page.save();
    return page;
};

const fetchPage = async (pageID, fields, slug) => {
    let query = {};
    if (slug === null && pageID !== null) {
        query = { _id: pageID };
    } else {
        query = { slug };
    }
    let promise = Page.findOne(query);

    if (fields !== undefined) {
        const select = fields.split(',').join(' ');
        promise = promise.select(select);
    }
    const page = await promise;
    return page;
};

const deletePage = async (pageID) => {
    const page = await Page.deleteOne({ _id: pageID });
    return page.deletedCount;
};

const editPage = async (pageID, data) => {
    let page = await Page.findById(pageID);
    if (page == null) {
        throw Error('Page does not exist.');
    }
    const sanitizedHtml = DOMPurify.sanitize(marked(data.markdown));
    const slug = slugify(data.title);
    let publishDate = null;
    if (data.published === true) {
        publishDate = Date.now();
    }
    page.slug = slug;
    page.title = data.title;
    page.description = data.description;
    page.html = sanitizedHtml;
    page.markdown = data.markdown;
    page.published_at = publishDate;
    page.published = data.published;
    page.updated_at = Date.now();
    page.codeinjection_head = data.codeinjection_head;
    page.codeinjection_foot = data.codeinjection_foot;
    page.canonical_url = data.canonical_url;
    page.url = `/posts/${slug}`;
    page.og_title = data.title;
    page.og_description = data.description;
    page.twitter_title = data.title;
    page.twitter_description = data.description;
    page = await page.save();
    return page;
};

const togglePublish = async (pageID) => {
    const page = await Page.findById(pageID);
    if (page === null) {
        throw new ErrorEvent('page does not exists');
    }
    if (page.published === true) {
        page.published = false;
        page.published_at = null;
    } else {
        page.published = true;
        page.published_at = Date.now();
    }
    await page.save();
};

const uploadImage = async (pageID, filename) => {
    const page = await Page.findById(pageID);
    if (page === null) {
        throw new ErrorEvent('page does not exists');
    }

    if (page.feature_image_slug !== null) {
        await fs.unlink(path.join(__dirname, `../../../public/uploads/${page.feature_image_slug}`));
    }
    page.feature_image_url = `/static/uploads/${filename}`;
    page.feature_image_slug = filename;
    page.og_image_url = `/static/uploads/${filename}`;
    page.twitter_image = `/static/uploads/${filename}`;
    await page.save();
};
module.exports = {
    fetchAllPages, newPage, deletePage, fetchPage, editPage, togglePublish, uploadImage,
};
