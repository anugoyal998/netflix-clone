const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: 'string',
    email: 'string',
    img: 'string',
    subscribed: 'boolean',
    plan: 'string',
    expires: 'string',
})

module.exports = mongoose.models.User || mongoose.model('User',UserSchema)