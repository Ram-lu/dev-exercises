const { db } = require('../db/drizzle');
const { orders } = require('../db/schema');
const Order = require('../../core/domain/OrderModel');
const { eq } = require('drizzle-orm');

class OrderRepository {

    async create(orderData) {
        const [newOrder] = await db.insert(orders).values(orderData).returning();
        return new Order(newOrder);
    }

    async findById(id) {
        const order = await db.query.orders.findFirst({ where: eq(orders.id, id) });
        return order ? new Order(order) : null;
    }

    async findAll() {
        const orderList = await db.select().from(orders)
        return orderList.map(order => new Order(order))
    }

    async update(id, orderData) {
        const [updatedOrder] = await db
            .update(orders)
            .set(orderData)
            .where(eq(orders.id, id))
            .returning()

        return updatedOrder ? new Order(updatedOrder) : null
    }

}

module.exports = OrderRepository

