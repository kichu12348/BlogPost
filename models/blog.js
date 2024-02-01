const {Schema, model} = require('mongoose');

const blogSchema = new Schema({
    title:{
        type:String,
        
    },
    content:{
        type:String,
    },
    email:{
        type:String,
    },
    name:{
        type:String,
    }
},{timestamps:true});

const Blog = model('Blog',blogSchema);

module.exports = Blog;