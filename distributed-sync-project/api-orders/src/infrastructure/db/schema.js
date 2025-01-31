const { pgTable, uuid, varchar, timestamp, integer, jsonb } = require("drizzle-orm/pg-core");

const users = pgTable('users', {
    id: uuid( 'id' ).defaultRandom().primaryKey(),
    name: varchar('name', { length: 100 }).notNull(),
    email: varchar('email', { length: 100 }).unique().notNull(),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
})

const orders = pgTable('orders',{
    id: uuid( 'id' ).defaultRandom().primaryKey(),
    user_id: uuid('user_id').references(() => users.id).notNull(),
    items: jsonb('items').notNull(),
    total: integer('total').notNull(),
    status: varchar('status', { length: 100 }).notNull().default('pending'),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
})

module.exports = { users, orders }