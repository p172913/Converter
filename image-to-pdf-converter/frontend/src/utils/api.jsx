import axios from 'axios';
const image_to_pdf_backend = process.env.image_to_pdf_backend;
const api = axios.create({
    baseURL: `${image_to_pdf_backend}`, // Adjust based on your backend URL
});

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await api.post('/convert/', formData);
    return response.data;
};