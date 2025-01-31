const UserRepository = require('../../infrastructure/repositories/UserRepository')


class UserService {
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async createUser(userData){
        return this.userRepository.create(userData)
    }

    async getUserByEmail(email){
        return this.userRepository.findByEmail(email)
    }

    async getUserById(id){
        return this.userRepository.findById(id)
    }

    async getAllUsers(){
        return this.userRepository.findAll()
    }
}

module.exports = UserService

