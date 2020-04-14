const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: { type: String, trim: true, unique: true },
    author: { type: String, trim: true },
    subject: { type: String, trim: true },
    article: { type: String, trim: true },
});

module.exports = mongoose.model('Blog', BlogSchema);
