const { check } = require('express-validator');

const validateOrderCreation = [
      check('user_id')
        .notEmpty()
        .withMessage('User id is required')
        .isUUID()
        .withMessage('User id must be a valid UUID'),
      check('items')
        .isArray({ min: 1 })
        .withMessage('The order must have at least one item'),
      check('items.*.productId')
        .notEmpty()
        .withMessage('Product id is required'),
      check('items.*.quantity')
        .notEmpty()
        .withMessage('Quantity is required')
        .isInt({ min: 1 })
        .withMessage('Quantity must be a positive integer'),
      check('items.*.price')
        .notEmpty()
        .withMessage('Price is required')
        .isFloat({ min: 0.01 })
        .withMessage('Price must be a positive number'),
      check('total')
        .notEmpty()
        .withMessage('Total is required')
        .isFloat({ min: 0.01 })
        .withMessage('Total must be a positive number'),
    ]

const validateOrderUpdate = [
  check('items')
    .isArray({ min: 1 })
    .withMessage('The order must have at least one item'),
  check('items.*.productId')
    .notEmpty()
    .withMessage('Product id is required'),
  check('items.*.quantity')
    .notEmpty()
    .withMessage('Quantity is required')
    .isInt({ min: 1 })
    .withMessage('Quantity must be a positive integer'),
  check('items.*.price')
    .notEmpty()
    .withMessage('Price is required')
    .isFloat({ min: 0.01 })
    .withMessage('Price must be a positive number'),
  check('total')
    .notEmpty()
    .withMessage('Total is required')
    .isFloat({ min: 0.01 })
    .withMessage('Total must be a positive number'),
]

module.exports = { validateOrderCreation, validateOrderUpdate }
