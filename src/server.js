const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const {porta, connectionString } = require('../config')

const sercer = express();

mongoose.connect(connectionString, { useNewUrlParser: true })

sercer.use(express.json())
sercer.use(routes)

sercer.listen(porta || 3333)