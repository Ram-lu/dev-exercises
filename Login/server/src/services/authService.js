const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const userRepository = require('../repositories/userRepository');


//Obtener Secret Key desde .env
const SECRET_KEY = process.env.JWT_SECRET;

const registerUser = async (email, password) => {
    const existingUser = await userRepository.findUserByEmail(email);

    if (existingUser) throw new Error('User already exists');

    
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const user = new User(email, hashedPassword);
    await userRepository.addUser(user);

    return {message: 'User created successfully'};
}

const authenticateUser = async (email, password) => {
    const user = await userRepository.findUserByEmail(email);

    if (!user) throw new Error('User not found');

    const isPasswordCorrect = await bcrypt.compare(password, user.hashedPassword);

    if (!isPasswordCorrect) throw new Error('Incorrect password');

    const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' });

    return { token, message: 'User authenticated successfully' };
}

const getAllUsers = async () => {
    const users = await userRepository.getUsers();
    console.log(users);
    if (!users) throw new Error('No users found');
    return users;
}

module.exports = {
    registerUser,
    authenticateUser,
    getAllUsers
}