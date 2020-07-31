const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
require('dotenv').config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_CONNECTION, 
  { useNewUrlParser: true }
)

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(process.env.PORT)