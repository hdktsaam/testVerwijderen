const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/testdb') //{useNewUrlParser: true, useUni}
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err);
})

db.once('open', () => {
    console.log('connecten to db ok');
})