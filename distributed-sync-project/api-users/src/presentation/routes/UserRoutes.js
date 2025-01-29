const express = require('express')
const userController = require('../controllers/userController')
const { check, validationResult } = require('express-validator')

const router = express.Router()

router.post('/register', [

    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),

], userController.registerUser)

router.get('/searchUser', [

    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),

], userController.searchUserEmail)

router.put('/modifyUser', [

    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),

], userController.modifyUser)

router.get('/list', userController.userList)

module.exports = router