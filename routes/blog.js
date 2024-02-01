const router = require('express').Router();
const {createBlog,deleteBlog} = require('../controllers/blog');
const {auth} = require('../services/auth');

router.post('/addblog',auth,createBlog);
router.post('/deleteBlog',auth,deleteBlog);

module.exports = router;