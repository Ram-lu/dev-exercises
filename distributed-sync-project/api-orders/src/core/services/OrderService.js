const OrderRepository = require('../../infrastructure/repositories/OrderRepository')
const { validateOrderCreation, validateOrderUpdate } = require('../validators/oderValidator')

class OrderService {
    constructor(orderRepository){
        this.orderRepository = orderRepository
    }

    async createOrder(orderData){
        console.log("------------OrderService.createOrder------------", orderData)
        return this.orderRepository.create(orderData)
    }

    async getOrderById(id){
        return this.orderRepository.findById(id)
    }

    async getAllOrders(){
        return this.orderRepository.findAll()
    }

    async updateOrder(id, orderData) {
        return this.orderRepository.update(id, orderData)
    }
}

module.exports = OrderService