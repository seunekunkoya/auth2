const router = require('express').Router()
const User = require('../models/User')

const Joi = require('@hapi/joi')

router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const saveUser = await user.save()
        res.status(200).send(saveUser)
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
})

module.exports = router