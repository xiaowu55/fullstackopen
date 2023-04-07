require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGDB_URI
const SECRET = process.env.SECRET

module.exports={
    MONGODB_URI,
    PORT,
    SECRET
}