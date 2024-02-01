const router = require('express').Router();
const {signup,login,home,myblogs,addblog} = require('../controllers/staticController');
const {CheckAuth,auth} = require('../services/auth');

router.get('/signup', signup);
router.get('/login', login);
router.get('/',CheckAuth,home);
router.get('/myblogs',auth,myblogs)
router.get('/addblogs',auth,addblog)

router.get('/logout',(req,res)=>{
    res.clearCookie('uid');
    res.redirect('/');
})

module.exports = router;