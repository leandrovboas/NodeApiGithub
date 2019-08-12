const { Schema, model } = require('mongoose')

const DevSchema = new Schema({
    nome:{
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    company: String,
    repos: [{
        type: Schema.Types.ObjectId,
        ref: 'Repos',
    }],
},{
    timestamps: true,
})

module.exports = model('Dev', DevSchema)