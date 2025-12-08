import React from 'react';
import '../public/App.css';
import ImageUploader from './components/ImageUploader';
// const image_to_pdf_frontend = import.meta.env.VITE_image_to_pdf_frontend;
// const jpg_to_pdf_frontend = import.meta.env.VITE_jpg_to_pdf_frontend;
// const png_to_pdf_frontend = import.meta.env.VITE_png_to_pdf_frontend;
// const word_to_pdf_frontend = import.meta.env.VITE_word_to_pdf_frontend;
// const jpg_to_png_frontend = import.meta.env.VITE_jpg_to_png_frontend;
// const png_to_jpg_frontend = import.meta.env.VITE_png_to_jpg_frontend;
// const excel_to_pdf_frontend = import.meta.env.VITE_excel_to_pdf_frontend;
const image_to_pdf_frontend = import.meta.env.VITE_image_to_pdf_frontend;
const jpg_to_pdf_frontend = import.meta.env.VITE_jpg_to_pdf_frontend;
const png_to_pdf_frontend = import.meta.env.VITE_png_to_pdf_frontend;
const word_to_pdf_frontend = import.meta.env.VITE_word_to_pdf_frontend;
const jpg_to_png_frontend = import.meta.env.VITE_jpg_to_png_frontend;
const png_to_jpg_frontend = import.meta.env.VITE_png_to_jpg_frontend;
const excel_to_pdf_frontend = import.meta.env.VITE_excel_to_pdf_frontend;

console.log("image_to_pdf_frontend:", image_to_pdf_frontend);
console.log("jpg_to_pdf_frontend:", jpg_to_pdf_frontend);
console.log("png_to_pdf_frontend:", png_to_pdf_frontend);
console.log("word_to_pdf_frontend:", word_to_pdf_frontend);
console.log("jpg_to_png_frontend:", jpg_to_png_frontend);
console.log("png_to_jpg_frontend:", png_to_jpg_frontend);
console.log("excel_to_pdf_frontend:", excel_to_pdf_frontend);
const App = () => {
    return (
        <div>
            <h1>Excel to PDF Converter</h1>
            <nav>
                <ul>
                    <li><a href={`${image_to_pdf_frontend}`} target="_blank">Image to PDF</a></li>
                    <li><a href={`${jpg_to_pdf_frontend}`} target="_blank">JPG to PDF</a></li>
                    <li><a href={`${png_to_pdf_frontend}`} target="_blank">PNG to PDF</a></li>
                    <li><a href={`${word_to_pdf_frontend}`} target="_blank">Word to PDF</a></li>
                    <li><a href={`${jpg_to_png_frontend}`} target="_blank">JPG to PNG</a></li>
                    <li><a href={`${png_to_jpg_frontend}`} target="_blank">PNG to JPG</a></li>
                    <li><a href={`${excel_to_pdf_frontend}`} target="_blank">Excel to PDF</a></li>
                </ul>
            </nav>
            <ImageUploader />
        </div>
    );
};

export default App;