const Blog = require('../models/blog');


async function createBlog(req,res){
    const {title,content} = req.body;
    const email = req.user.email;
    const name = req.user.name;
    const blog = await Blog.create({
        title,
        content,
        email,
        name,
    });
    res.redirect('/myblogs');
}

async function getBlogs(req,res){
    const email = req.user.email;
    const blogs = await Blog.find({email});
    res.render('blogs',{
        blogs
    });
}

async function deleteBlog(req,res){
    const id = req.body.blogId;
    await Blog.findByIdAndDelete(id);
    res.redirect('/myblogs');
}

module.exports = {
    createBlog,
    getBlogs,
    deleteBlog 
}