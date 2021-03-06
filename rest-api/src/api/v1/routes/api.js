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
const authorController = require('../controllers/authorController');
const commentController = require('../controllers/commentController');

// Posts endpoints
router.get('/posts', postController.getAllPosts);
router.get('/posts/:postID', postController.getPost);
router.get('/posts/slug/:slug', postController.getPostBySlug);

router.post('/posts', auth.editorOrAdminVerify, postController.createPost);
router.post('/posts/feature_image/:postID', auth.editorOrAdminVerify, upload.single('feature_image'), postController.uploadImage);
router.put('/posts/:postID', auth.editorOrAdminVerify, postController.editPost);
router.patch('/posts/publishToggle/:postID', auth.editorOrAdminVerify, postController.togglePublish);
router.delete('/posts/:postID', auth.adminVerify, postController.deletePost);

// Category end points
router.get('/category', categoryController.getAllCategories);
router.get('/category/:catID', categoryController.getCategory);
router.get('/category/slug/:slug', categoryController.getCategoryBySlug);

router.post('/category', auth.adminVerify, categoryController.createCategory);
router.put('/category/:catID', auth.adminVerify, categoryController.editCategory);
router.delete('/category/:catID', auth.adminVerify, categoryController.deleteCategory);

// Author end points
router.get('/author', authorController.getAllAuthors);
router.get('/author/:authorID', authorController.getAuthor);
router.get('/author/slug/:slug', authorController.getAuthorBySlug);

router.post('/author', auth.adminVerify, authorController.createAuthor);
router.put('/author/:authorID', auth.adminVerify, authorController.editAuthor);
router.delete('/author/:authorID', auth.adminVerify, authorController.deleteAuthor);

// Comment end points
router.get('/comment', commentController.getAllComments);
router.delete('/comment/:commentID', commentController.deleteComment);
router.patch('/comment/:commentID', commentController.editComment);
router.post('/comment', commentController.createComment);

// Admin endpoints
router.post('/admin/login', adminController.login);
router.post('/admin/register', adminController.register);
router.get('/admin/posts', auth.adminVerify, adminController.getAllPosts);
router.get('/admin/settings', auth.adminVerify, adminController.getSettings);
router.post('/admin/settings', auth.adminVerify, adminController.createSettings);
router.patch('/admin/settings', auth.adminVerify, adminController.editSettings);
router.post('/admin/settings/logo', auth.adminVerify, upload.single('logo'), adminController.uploadLogo);
router.post('/admin/settings/coverImage', auth.adminVerify, upload.single('cover_image'), adminController.uploadImage);

// 404 handler
router.use((req, res) => res.status(404).json({
    status: 'failure',
    message: 'invalid url',
}));

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
