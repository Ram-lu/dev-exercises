import axios from 'axios';

export class ApiUsersClient {
    constructor(baseUrl) {
        this.client = axios.create({ baseURL: baseUrl });
    }

    async createUser(userData) {
        const response = await this.client.post('/api/users/register', userData);
        return response.data;
    }

    async getUser(userEmail){
        try {
            const response = await this.client.get('/api/users/searchUser', userEmail);
            return response.data;
        } catch (error) {
            if (error.response?.status === 404) return null;
            throw error;
        }
    }
}

