const OrderRepository = require('./src/infrastructure/repositories/OrderRepository')
const UserRepository = require('./src/infrastructure/repositories/UserRepository')

const orderRepository = new OrderRepository()
const userRepository = new UserRepository()

const OrderService = require('./src/core/services/OrderService')
const UserService = require('./src/core/services/UserService')

const orderService = new OrderService(orderRepository)
const userService = new UserService(userRepository)

module.exports = {
    orderService,
    userService
}