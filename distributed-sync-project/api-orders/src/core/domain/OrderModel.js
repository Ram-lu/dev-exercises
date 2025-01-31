class Order {
    constructor({ id, user_id, items, total, status, created_at, updated_at }){
        this.id = id
        this.user_id = user_id
        this.items = items
        this.total = total
        this.status = status
        this.created_at = created_at
        this.updated_at = updated_at
    }
}

module.exports = Order