const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const connection = require('./connection/connect')

const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')

const app = express()

app.use(express.json())

app.use('/api/v1/users', userRoute)
app.use('/api/v1', authRoute)

app.get('/', (req,res) => {
    res.send('hallo')
})

app.listen(3000, () => {console.log(`server gestard op poort 3000`)})