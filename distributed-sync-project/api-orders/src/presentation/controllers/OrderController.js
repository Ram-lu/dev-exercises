const { orderService } = require('../../../di')

class OrderController {
    async ceateOrder(req, res) {
        try {
            const order = await orderService.createOrder(req.body)
            res.status(201).json(order)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error creating order', error: error.message })
        }
    }

    async getOrderById(req, res) {
        try {
            const order = await orderService.getOrderById(req.body.id)
            if (!order) res.status(404).json({ message: 'Order not found' })
            res.status(200).json(order)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error getting order', error: error.message })
        }
    }

    async getAllOrders(req, res) {
        try {
            const orders = await orderService.getAllOrders()
            res.status(200).json(orders)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error getting orders', error: error.message })
        }
    }

    async updateOrder(req, res) {
        try {
            const order = await orderService.updateOrder(req.body.id, req.body)
            if (!order) res.status(404).json({ message: 'Order not found' })
            res.status(200).json(order)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error updating order', error: error.message })
        }
    }
}

module.exports = new OrderController()