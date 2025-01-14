const fs = require('fs-extra');
const path = require('path');

//Ruta actualizada para el archivo de db.json
const DB_PATH = path.join(__dirname, '../../database/db.json');

const getUsers = async () => {
    const data = await fs.readJson(DB_PATH);
    return data.users;
}

const saveUser = async (user) => {
    const data = { user }
    await fs.writeJson(DB_PATH, data, { spaces: 2 });
}

const findUserByEmail = async (email) => {
    const users = await getUsers();
    return users.find(user => user.email === email);
}

const addUser = async (user) => {
    const users = await getUsers();
    users.push(user);
    await saveUser(users);
}

module.exports = {
    getUsers,
    findUserByEmail,
    addUser
}