const blog = require('../models/blog');

//renders signup page
async function signup(req,res){
    res.render('signup');
}

//renders login page
async function login(req,res){
    res.render('login');
}

//renders home page with all blogs
async function home(req,res){
    const email = req.user?.email;
    const userBlg = await blog.find({email});
    const allBlg = await blog.find({});
    const name = userBlg?.name || req.user?.name;
   
    res.render('home',{
        user:name,
        userBlg:allBlg,
        delete:false
    });
}

//renders myblogs page with all blogs of the user
async function myblogs(req,res){
    
    const email = req.user.email;
    const userBlg = await blog.find({email});
    const name = userBlg.name || req.user.name;
    res.render('myblogs',{
        userBlg:userBlg,
        user:name,
        delete:true
    });

}


//renders addblogs page
async function addblog(req,res){
    const email = req.user?.email;
    const userBlogs = await blog.find({email});
    const name = userBlogs?.name || req.user?.name;
    
    res.render('addblogs',{
        user:name,
    });
}


module.exports = {signup,login,home,myblogs,addblog};