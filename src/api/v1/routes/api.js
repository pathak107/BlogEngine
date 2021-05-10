const express = require('express');
const { logger } = require('../../../config/logger');
const { upload } = require('../../../config/multerConfig');
const router = express.Router();

// Importing middleware
const auth = require('../middlewares/authMiddleware');

// Importing controllers
const postController = require('../controllers/postController');
const adminController = require('../controllers/adminController');

// Error Handling wrapper function
// const callController = (controller) => async (req, res, next) => {
//     try {
//         controller(req, res, next);
//     } catch (err) {
//         console.log("asdasdsa");
//         next(err);
//     }
// };

// Posts endpoints
router.get('/posts', postController.getAllPosts);
router.get('/posts/:postID', postController.getPost);
router.get('/posts/slug/:slug', postController.getPostBySlug);
router.post('/posts', auth.adminVerify, postController.createPost);
router.post('/posts/feature_image/:postID', auth.adminVerify, upload.single('feature_image'), postController.uploadImage);
router.put('/posts/:postID', auth.adminVerify, postController.editPost);
router.patch('/posts/publishToggle/:postID', auth.adminVerify, postController.togglePublish);
router.delete('/posts/:postID', auth.adminVerify, postController.deletePost);

// Admin endpoints
router.post('/admin/login', adminController.login);
router.get('/admin/settings', auth.adminVerify, adminController.getSettings);
router.put('/admin/settings', auth.adminVerify, adminController.editSettings);

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
