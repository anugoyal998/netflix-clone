const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: 'string',
    password: 'string',
    email: 'string',
})

module.exports = mongoose.models.User || mongoose.model('User',UserSchema)