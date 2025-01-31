const { userService } = require("../../../di")

class UserController {
    async registerUser(req, res) {
        try {
            const newUser = await userService.createUser(req.body)
            res.status(201).json(newUser)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error creating user', error: error.message })
        }
    }

    async getUserById(req, res) {
        try {
            const user = await userService.getUserById(req.body.id)
            if (!user) res.status(404).json({ message: 'User not found' })
            res.status(200).json(user)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error getting user', error: error.message })
        }
    }

    async getUserByEmail(req, res) {
        try {
            const user = await userService.getUserByEmail(req.body.email)
            if (!user) res.status(404).json({ message: 'User not found' })
            res.status(200).json(user)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error getting user', error: error.message })
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers()
            res.status(200).json(users)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error getting users', error: error.message })
        }
    }
}

module.exports = new UserController()