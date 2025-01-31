const express = require('express')
const orderController = require('../controllers/OrderController')
const {validateOrderCreation, validateOrderSearch, validateOrderUpdate} = require('../../core/validators/oderValidator')
const {validationResult} = require('express-validator')

const router = express.Router()

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
}

router.post(
    '/create', 
    validateOrderCreation, 
    handleValidationErrors, 
    orderController.ceateOrder
)

router.get(
    '/searchOrder', 
    orderController.getOrderById
)

router.get(
    '/list',
    orderController.getAllOrders
)

router.put(
    '/modifyOrder', 
    validateOrderUpdate, 
    handleValidationErrors, 
    orderController.updateOrder
)

module.exports = router