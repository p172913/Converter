import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [pdfFile, setPdfFile] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setError('Please select an image file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const png_to_pdf_backend = import.meta.env.VITE_png_to_pdf_backend;
            const response = await axios.post(`${png_to_pdf_backend}/convert/`, formData);
            setPdfFile(response.data.filename); // Assuming the response contains the filename
            setError('');
        } catch (err) {
            setError('Error converting PNG to PDF. Please try again.');
        }
    };

    const png_to_pdf_backend = import.meta.env.VITE_png_to_pdf_backend;
    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Convert to PDF</button>
            {error && <p>{error}</p>}
            {pdfFile && <a href={`${png_to_pdf_backend}/uploads/${pdfFile}`} download>Download PDF</a>}
        </div>
    );
};

export default ImageUploader;