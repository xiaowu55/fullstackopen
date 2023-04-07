const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const logger = require('./utils/logger')
const config = require('./utils/config')
const listRouter = require('./controllers/lists')
const loginRouter = require('./controllers/login')
const userRouter = require('./controllers/user')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/blogs', listRouter)
app.use('/api/user',userRouter)
app.use('/api/login',loginRouter)

module.exports = app