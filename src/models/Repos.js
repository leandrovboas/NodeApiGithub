const { schema, model } = require('mongoose')

const ReposSchema = new schema({
    name:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    clone:{
        type: String,
        required: true,
    },
},
{
    timestamps: true,
})

module.exports = model('Repos', ReposSchema)