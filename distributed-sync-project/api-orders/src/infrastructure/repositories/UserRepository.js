const { db } = require('../db/drizzle');
const { users } = require('../db/schema')
const User = require('../../core/domain/UserModel')
const { eq } = require('drizzle-orm')

class UserRepository {

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

        async findById(id){
            const user = await db.query.users.findFirst({ where: eq(users.id, id)})
            return user ? new User(user) : null;
        }

        async findByEmail(email){
            const user = await db.query.users.findFirst({ where: eq(users.email, email)})
            return user ? new User(user) : null;
        }

        async findAll(){
            const userList = await db.select().from(users)
            return userList.map(user => new User(user))
        }
}

module.exports = UserRepository