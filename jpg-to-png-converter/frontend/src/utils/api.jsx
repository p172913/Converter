import axios from 'axios';
const jpg_to_png_backend = process.env.jpg_to_png_backend;
const api = axios.create({
    baseURL: `${jpg_to_png_backend}`, // Adjust based on your backend URL
});

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await api.post('/convert/', formData);
    return response.data;
};