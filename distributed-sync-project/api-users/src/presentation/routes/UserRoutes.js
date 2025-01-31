const express = require('express')
const userController = require('../controllers/userController')
const { check, validationResult } = require('express-validator')

const router = express.Router()

const validateUserRegistration = [
    check('name').exists().withMessage('Name is required').notEmpty(),
    check('email').exists().withMessage('Email is required').isEmail().withMessage('Email is not valid'),
]

const validateUserSearch = [
    check('email').exists().withMessage('Email is required').isEmail().withMessage('Email is not valid'),
]

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
}

router.post('/register', validateUserRegistration, handleValidationErrors, userController.registerUser)
router.get('/searchUser', validateUserSearch, handleValidationErrors, userController.searchUserEmail)
router.put('/modifyUser', validateUserSearch, handleValidationErrors, userController.modifyUser)
router.get('/list', userController.userList)

module.exports = router


