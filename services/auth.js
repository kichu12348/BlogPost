const User = require('../models/user');
const jwt = require('jsonwebtoken');



//secret
const secret = "kichu12348";

// creates authentcation token

async function createAuth(user){
    const {_id} = user;
    const token = jwt.sign({_id},secret);
    return token;
}



//checks if user is authenticated

async function CheckAuth(req,res,next){
    const token = req.cookies?.uid;
    if(token){
        try{
        const { _id } = jwt.verify(token,secret);
        const user = await User.findOne({_id});
        
        req.user = user;
        
        next();
    }catch(err){
        res.redirect('/login')
    }
  }
    else{
        next();
    }
    

}

async function auth(req,res,next){
    const token = req.cookies?.uid;
    if(!token){
        return res.redirect('/login');
    }
    else{
        try{
            const { _id } = jwt.verify(token,secret);
            const user = await User.findOne({_id});
            if(!user){
                return res.redirect('/login');
            }
            else{
                req.user = user;
                next();
            }
            
        }
        catch(err){
            return res.redirect('/login');
        }
    }

}


module.exports = {
    CheckAuth,
    createAuth,
    auth
};