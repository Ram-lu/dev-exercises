const { check } =  require('express-validator');

const validateUser = (userData) => {
    return [
        check('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email must be a valid email'),
    ](userData)
}

module.exports = { validateUser }