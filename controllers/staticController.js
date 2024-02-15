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

//returns all blogs in json format  for home page
async function homeCard(req,res){
    const allBlg = await blog.find({});
    res.json(allBlg);
}

//returns all blogs of the user in json format for myblogs page
async function myblogsCard(req,res){
    const email = req.user.email;
    const userBlg = await blog.find({email});
    res.json(userBlg);
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


module.exports = {
    signup,
    login,
    home,
    myblogs,
    addblog,
    homeCard,
    myblogsCard
};