const { schema, model } = require('mongoose')

const DevSchema = new schema({
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
},{
    timestamps: true,
})

module.exports = model('Dev', DevSchema)