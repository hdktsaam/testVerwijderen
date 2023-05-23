const User = require('../models/user')

const index = (req,res) => {
    // res.json({message: 'hallo'})
    User.find().then(response => {
        res.json({response})
    })
    .catch(error => {
        res.json({
            message: 'Error'
        })
    })
}

module.exports = {
    index
}