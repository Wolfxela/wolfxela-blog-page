const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    user:{type: Schema.ObjectId,ref:"user",required:true},
    content:{type: String,required:true},
    post:{type:Schema.ObjectId,ref:"post",required:true}
})

module.exports = mongoose.model("Comment",commentSchema)