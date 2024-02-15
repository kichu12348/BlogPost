const router = require('express').Router();
const {signup,login,home,myblogs,addblog,homeCard,myblogsCard} = require('../controllers/staticController');
const {CheckAuth,auth} = require('../services/auth');
const blog = require('../models/blog');
//routes
router.get('/signup', signup);
router.get('/login', login);
router.get('/',CheckAuth,home);
router.get('/home',CheckAuth,homeCard);
router.get('/myblogs',auth,myblogs)
router.get('/myBlog',auth,myblogsCard)
router.get('/addblogs',auth,addblog)



router.get('/logout',(req,res)=>{
    res.clearCookie('uid');
    res.redirect('/');
})

module.exports = router;