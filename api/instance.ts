import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.BACKEND_PATH,
    timeout: 30000,
})