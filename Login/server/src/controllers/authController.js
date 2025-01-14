const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const response = await authService.registerUser(email, password);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const response = await authService.authenticateUser(email, password);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const userList = async (req, res) => {
    try {
        const users = await authService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    register,
    login,
    userList
}