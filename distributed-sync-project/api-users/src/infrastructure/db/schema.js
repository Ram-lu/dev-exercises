const { pgTable, uuid, varchar, timestamp } = require("drizzle-orm/pg-core");

const users = pgTable('users', {
    id: uuid( 'id' ).defaultRandom().primaryKey(),
    name: varchar('name', { length: 100 }).notNull(),
    email: varchar('email', { length: 100 }).unique().notNull(),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
} )

module.exports = {
    users
}