class User {
    constructor(email, hashedPassword) {
        this.email = email;
        this.hashedPassword = hashedPassword;
    }
}

module.exports = User;