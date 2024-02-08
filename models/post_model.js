const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title:{type:String,required:true},
    content:{type: String,required:true},
    likes:{type:Number,required:true}
})

postSchema.virtual("url").get(function(){
    return `/posts/:${this._id}`
})
module.exports = mongoose.model("post",postSchema)