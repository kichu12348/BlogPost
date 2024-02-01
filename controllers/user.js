const User = require('../models/user');
const {createAuth} = require('../services/auth');
const crypto = require('crypto');



//hash password for verification
function HashPassword(password,pepper){
    const hash = crypto.createHmac('sha512',pepper).update(password).digest('hex');
    return {hash};
}

//Create user
async function createUser(req,res){
    const {name,email,password} = req.body;
    try{
    const user = await User.create({
        name,
        email,
        password
    });
    user.password = undefined;
    user.pepper = undefined;
    const token = await createAuth(user._id);
    res.cookie('uid',token);
    return res.redirect('/');
    }catch(err){
        return res.render('signup',{message:'email already exists'});
    }
}

// log's user in
async function getUser(req,res){
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.render('login',{message:'invalid credentials'});
    }
    else{
        const {hash} = HashPassword(password,user.pepper);
        if(hash === user.password){
            const token = await createAuth(user._id);
            res.cookie('uid',token);
            res.redirect('/');
        }
        else{
            res.render('login',{message:'invalid credentials'});
        }
    }
}


module.exports = {
    createUser,
    getUser
};