const UserRepository = require('../../infrastructure/repositories/UserRepository')
const { validationResult } = require('express-validator')



class UserService {
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async createUser(userData){
        console.log('-----UserService-----', userData)

        const errors = validationResult(userData)

        if(!errors.isEmpty()) throw new Error({ message: 'Validation error', errors: errors.array() })

        const existingUser = await this.userRepository.findByEmail(userData.email)

        if(existingUser) throw new Error('Email already in use')
        
        return await this.userRepository.create(userData)
    }

    async getUserByEmail(email){
        return await this.userRepository.findByEmail(email)
    }

    async updateUser(email, userData){
        const errors = validationResult(userData)

        if(!errors.isEmpty()) throw new Error({ message: 'Validation error', errors: errors.array() })
        
        if (userData.email) {
            const existingUser = await this.userRepository.findByEmail(userData.email);
            if (existingUser && existingUser.email !== email) {
                throw new Error('Email already in use');
            }
        }

        return await this.userRepository.update(email, userData)
    }

    async deleteUser(email){
        return await this.userRepository.delete(email)
    }

    async getAllUsers(){
        return await this.userRepository.findAll()
    }
}

const userRepository = new UserRepository();

const userService = new UserService(userRepository)

module.exports = userService