const UserService = require('../../core/services/UserService')

const registerUser = async (req, res) => {
    console.log(req.body)

    try {
        const newUser = await UserService.createUser(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

const searchUserEmail = async (req, res) => {
    try {
        const { email } = req.body
        const user = await UserService.getUserByEmail(email)

        if (!user) res.status(404).json({ message: 'User not found' })
        
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

const modifyUser = async (req, res) => {
    try{
        const {email} = req.body
        const updatedUser = await UserService.updateUser(email, req.body)

        if(!updatedUser) res.status(404).json({ message: 'User not found' })
        res.status(200).json(updatedUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}


const userList = async (req, res) => {
    try {
        const users = await UserService.getAllUsers()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    registerUser,
    searchUserEmail,
    modifyUser,
    userList
}
