const express = require('express');
const { logger } = require('../../../config/logger');
const { upload } = require('../../../config/multerConfig');
const router = express.Router();

// Importing middleware
const auth = require('../middlewares/authMiddleware');

// Importing controllers
const postController = require('../controllers/postController');
const adminController = require('../controllers/adminController');
const categoryController = require('../controllers/categoryController');

// Posts endpoints
router.get('/posts', postController.getAllPosts);
router.get('/posts/:postID', postController.getPost);
router.get('/posts/slug/:slug', postController.getPostBySlug);
router.post('/posts', auth.adminVerify, postController.createPost);
router.post('/posts/feature_image/:postID', auth.adminVerify, upload.single('feature_image'), postController.uploadImage);
router.put('/posts/:postID', auth.adminVerify, postController.editPost);
router.patch('/posts/publishToggle/:postID', auth.adminVerify, postController.togglePublish);
router.delete('/posts/:postID', auth.adminVerify, postController.deletePost);

// Category end points
router.get('/category', categoryController.getAllCategories);
router.get('/category/:catID', categoryController.getCategory);
router.get('/category/slug/:slug', categoryController.getCategoryBySlug);
router.post('/category', auth.adminVerify, categoryController.createCategory);
router.put('/category/:catID', auth.adminVerify, categoryController.editCategory);
router.delete('/category/:catID', auth.adminVerify, categoryController.deleteCategory);

// auth endpoints
router.post('/auth/admin/login', adminController.login);

// Admin endpoints
router.get('/settings', auth.adminVerify, adminController.getSettings);
router.put('/settings', auth.adminVerify, adminController.editSettings);
// router.patch('/admin/settings/logo', auth.adminVerify, adminController.getSettings);
// router.patch('/admin/settings/coverImage', auth.adminVerify, adminController.getSettings);

// Error handler function
router.use((err, req, res, next) => {
    logger.error({ error: err.message, stack: err.stack });
    res.status(500).json({
        status: 'failure',
        error: err.message,
    });
    next(err);
});

module.exports = router;
