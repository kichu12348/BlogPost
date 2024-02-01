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
    const allBlg = await blog.find();
    const name = userBlg[0]?.name;
    res.render('home',{
        user:name,
        userBlg:allBlg[0],
    });
}

async function myblogs(req,res){
    
    const email = req.user.email;
    const userBlg = await blog.find({email});
    const name = userBlg[0].name;
    console.log(userBlg);
    res.render('myblogs',{
        userBlg:userBlg[0],
        user:name,
    
    });

}

async function addblog(req,res){
    const email = req.user?.email;
    const userBlogs = await blog.find({email});
    const name = userBlogs[0]?.name;
    
    res.render('addblogs',{
        user:name,
    });
}


module.exports = {signup,login,home,myblogs,addblog};