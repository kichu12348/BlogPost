const router = require('express').Router();
const {createBlog,deleteBlog} = require('../controllers/blog');
const {auth} = require('../services/auth');

//routes
router.post('/addblog',auth,createBlog);
router.post('/delete/:id',auth,deleteBlog);

module.exports = router;