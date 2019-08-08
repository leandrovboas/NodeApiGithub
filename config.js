
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    connectionString: process.env.CONNECTION_STRING,
    porta: process.env.PORT
}