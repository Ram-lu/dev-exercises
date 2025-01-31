import axios from 'axios';

class ApiOrdersClient {
    constructor(baseUrl) {
        this.client = axios.create({ baseURL: baseUrl });
    }

    async createUser(userData) {
        const response = await this.client.post('/api/orders/create', userData);
        return response.data;
    }

    async getUser(userId) {
        try {
            const response = await this.client.get('/api/orders/getUserById', userId);
            return response.data;
        } catch (error) {
            if (error.response?.status === 404) return null;
            throw error;
        }
    }

    async createOrder(orderData) {
        const response = await this.client.post('/api/orders/create', orderData);
        return response.data;
    }
}