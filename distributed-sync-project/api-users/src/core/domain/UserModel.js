class User {
    constructor({id, name, email, createdAt, updatedAt}) {
        this.id = id,
        this.name = name,
        this.email = email,
        this.createdAt = createdAt,
        this.updatedAt = updatedAt
    }

    static create(data) {
        return new User({
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        })
    }
}

module.exports = User