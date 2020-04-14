const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title: {type: String, default: ''},
    author: {type: String, default: ''},
    subject: {type: String, default: ''},
    article: {type: String, default: ''},
    title: {type: String, default: ''}
})

module.exports = mongoose.model('Blog', BlogSchema)