const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: String,
    language: String,
    id: String,
    bio: String,
    version: Number
});

console.log("data model")

module.exports = mongoose.model('Data', dataSchema);
