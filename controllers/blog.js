const Blog = require('../models/blog');

//creates blog after getting title and content from req.body and email and name from req.user
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


//deletes blog after finding it by id

async function deleteBlog(req,res){
    const id = req.params.id;
    await Blog.findByIdAndDelete(id);
    res.redirect('/myblogs');
}

module.exports = {
    createBlog,
    deleteBlog 
}