const {Schema, model} = require('mongoose');
const crypto = require('crypto');

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    pepper:{
        type:String,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
    
},{timestamps:true});

function HashPassword(password){
    const pepper = crypto.randomBytes(32).toString('hex');
    const hash = crypto.createHmac('sha512',pepper).update(password).digest('hex');
    return {pepper,hash};
}

userSchema.pre('save',function(next){
    const user = this;
    if(user.isModified('password')){
        const {pepper,hash} = HashPassword(user.password);
        user.password = hash;
        user.pepper = pepper;
    }
    next();
})


const User = model('User',userSchema);

module.exports = User;