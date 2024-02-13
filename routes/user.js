const router = require('express').Router()
const { get } = require('mongoose');
const {createUser,getUser} = require('../controllers/user')

//routes
router.post('/signup',createUser)
router.post('/login',getUser)

module.exports = router;