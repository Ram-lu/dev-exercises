const { db } = require('../db/drizzle');
const { users } = require('../db/schema')
const User = require('../../core/domain/UserModel')
const { eq } = require('drizzle-orm')

class UserRepository {

    constructor(){}

    async create(userData){
        const [newUser] = await db.insert(users)
            .values(userData)
            .returning()
            .catch(error => {
                console.log('Error creating user', error)
                throw new Error('Error creating user', error)
            })
        console.log('New user created', newUser)

        return new User(newUser)
    }

    async findByEmail(email){
        console.log('-----UserRepository-----', email)

        const user = await db.query.users.findFirst({ where: eq(users.email, email)})
        return user ? new User(user) : null;
    }

    async update(email, userData){
        const [updateUser] = await db
            .update(users)
            .set(userData)
            .where(eq(users.email, email))
            .returning()
        return updateUser ? new User(updateUser) : null
    }

    async delete(email){
        await db.delete(users).where(eq(users.email, email))
        return {message: 'User deleted successfully'}
    }

    async findAll(){
        const allUsers = await db.select().from(users)
        return allUsers.map(user => new User(user))
    }
}

module.exports = UserRepository

