import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

export const login = async (email, password) => {
    const {data} = await api.post('/login', { email, password })
    return data
};

export const register = async (email, password) => {
    const {data} = await api.post('/register', { email, password })
    return data
}

export default api