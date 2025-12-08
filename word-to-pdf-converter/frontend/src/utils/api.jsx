import axios from 'axios';
const word_to_pdf_backend = import.meta.env.VITE_word_to_pdf_backend;
const api = axios.create({
    baseURL: `${word_to_pdf_backend}`, // Adjust based on your backend URL
});

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await api.post('/convert/', formData);
    return response.data;
};