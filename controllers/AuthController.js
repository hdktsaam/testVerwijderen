const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if (err) {
            res.json({error: err.message})
        }

        let user = new User({
            naam: req.body.naam,
            email: req.body.email,
            telefoon: req.body.telefoon,
            password: hashedPass
        })

        user.save()
        .then(user => {
            res.json({message: 'geluk om aan te maken', gebruiker : {user}})
        })
        .catch(err => {
            res.json({error: err})
        })
    })
}

const login = (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    console.log(username, password);
    User.findOne({$or: [{email:username}, {telefoon:username}]})
    .then(user => {
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) res.json({error: err})
                if (result) {
                    let token = jwt.sign({name: user.naam},"ietsmoeilijk", {expiresIn: '1h'})
                    res.json({bericht: "goed ingelogd", token})
                }else{
                    res.json({bericht: "foutief paswoord"})
                }
            })
        }else {
            res.json({bericht: "niemand gevonden"})
        }
    })
}

module.exports = {register, login}