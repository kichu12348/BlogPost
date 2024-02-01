const {connect} = require('mongoose');

async function connectDB(url) {
    return connect(url).then(()=>console.log("Connected to mongoDB")).catch((err)=>console.log(err));
}

module.exports = {connectDB};