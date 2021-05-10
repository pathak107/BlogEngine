const slugify = require('slugify');
const Category = require('../models/category');
const config = require('../../../../config.json');

const getAllCategories = async () => {
    const categories = await Category.find();
    return categories;
};

const getCategory = async (catID, slug) => {
    let query = {};
    if (catID !== null) {
        query = { _id: catID };
    } else {
        query = { slug };
    }
    const category = await Category.findOne(query);
    return category;
};

const deleteCategory = async (catID) => {
    const deleted = await Category.deleteOne({ _id: catID });
    return deleted.deletedCount;
};

const createCategory = async (data) => {
    const slug = slugify(data.name);
    let category = new Category({
        slug,
        name: data.name,
        description: data.description,
        feature_image: config.meta.cover_image,
        og_image: config.meta.cover_image,
        og_title: data.name,
        og_description: data.description,
        twitter_image: config.meta.cover_image,
        twitter_title: data.name,
        twitter_description: data.description,
        codeinjection_head: data.codeinjection_head,
        codeinjection_foot: data.codeinjection_foot,
        canonical_url: data.canonical_url,
        url: `/category/${slug}`,
    });
    category = await category.save();
    return category;
};

const editCategory = async (catID, data) => {
    const slug = slugify(data.name);
    let category = await Category.findById(catID);
    if (category === null) {
        throw new Error('Category does not exists.');
    }
    category.slug = slug;
    category.name = data.name;
    category.description = data.description;
    category.feature_image = config.meta.cover_image;
    category.og_image = config.meta.cover_image;
    category.og_title = data.name;
    category.og_description = data.description;
    category.twitter_image = config.meta.cover_image;
    category.twitter_title = data.name;
    category.twitter_description = data.description;
    category.codeinjection_head = data.codeinjection_head;
    category.codeinjection_foot = data.codeinjection_foot;
    category.canonical_url = data.canonical_url;
    category.url = `/category/${slug}`;
    category = await category.save();
    return category;
};

module.exports = {
    getAllCategories, getCategory, deleteCategory, createCategory, editCategory,
};
