import axios from 'axios';

const excel_to_pdf_backend = process.env.excel_to_pdf_backend;
const api = axios.create({
    baseURL: `${excel_to_pdf_backend}`, // Adjust based on your backend URL
});

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await api.post('/convert/', formData);
    return response.data;
};