const express = require('express');
const userController = require('../controllers/UserController');
const { validationResult } = require('express-validator');

const router = express.Router();

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
}

router.post(
    '/register', 
    userController.registerUser
)

router.get(
    '/getUserById', 
    userController.getUserById
)

router.get(
    '/getUserByEmail', 
    userController.getUserByEmail
)

router.get(
    '/getAllUsers',
    userController.getAllUsers
)

module.exports = router