const blog = require('../models/blog');


async function signup(req,res){
    res.render('signup');
}

async function login(req,res){
    res.render('login');
}

async function home(req,res){
    const email = req.user?.email;
    const userBlg = await blog.find({email});
    const allBlg = await blog.find({});
    const name = userBlg?.name || req.user?.name;
    res.render('home',{
        user:name,
        userBlg:allBlg,
    });
}

async function myblogs(req,res){
    
    const email = req.user.email;
    const userBlg = await blog.find({email});
    const name = userBlg.name || req.user.name;
    res.render('myblogs',{
        userBlg:userBlg,
        user:name,
    
    });

}

async function addblog(req,res){
    const email = req.user?.email;
    const userBlogs = await blog.find({email});
    const name = userBlogs?.name || req.user?.name;
    
    res.render('addblogs',{
        user:name,
    });
}


module.exports = {signup,login,home,myblogs,addblog};