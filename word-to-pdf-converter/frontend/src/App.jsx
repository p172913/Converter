// import React from 'react';
// import '../public/App.css';
// import ImageUploader from './components/ImageUploader';

// const App = () => {
//     return (
//         <div>
//             <h1>Word to PDF Converter</h1>
//             <nav>
//                 <ul>
//                     <li><a href="http://localhost:3000" target="_blank">Image to PDF</a></li>
//                     <li><a href="http://localhost:3001" target="_blank">JPG to PDF</a></li>
//                     <li><a href="http://localhost:3002" target="_blank">PNG to PDF</a></li>
//                     <li><a href="http://localhost:3003" target="_blank">Word to PDF</a></li>
//                     <li><a href="http://localhost:3004" target="_blank">JPG to PNG</a></li>
//                     <li><a href="http://localhost:3005" target="_blank">PNG to JPG</a></li>
//                     <li><a href="http://localhost:3006" target="_blank">Excel to PDF</a></li>
//                 </ul>
//             </nav>
//             <ImageUploader />
//         </div>
//     );
// };

// export default App;
import React from 'react';
import '../public/App.css';
import ImageUploader from './components/ImageUploader';
// const image_to_pdf_frontend = process.env.image_to_pdf_frontend;
// const jpg_to_pdf_frontend = process.env.jpg_to_pdf_frontend;
// const png_to_pdf_frontend = process.env.png_to_pdf_frontend;
// const word_to_pdf_frontend = process.env.word_to_pdf_frontend;
// const jpg_to_png_frontend = process.env.jpg_to_png_frontend;
// const png_to_jpg_frontend = process.env.png_to_jpg_frontend;
// const excel_to_pdf_frontend = process.env.excel_to_pdf_frontend;
const image_to_pdf_frontend = import.meta.env.VITE_image_to_pdf_frontend;
const jpg_to_pdf_frontend = import.meta.env.VITE_jpg_to_pdf_frontend;
const png_to_pdf_frontend = import.meta.env.VITE_png_to_pdf_frontend;
const word_to_pdf_frontend = import.meta.env.VITE_word_to_pdf_frontend;
const jpg_to_png_frontend = import.meta.env.VITE_jpg_to_png_frontend;
const png_to_jpg_frontend = import.meta.env.VITE_png_to_jpg_frontend;
const excel_to_pdf_frontend = import.meta.env.VITE_excel_to_pdf_frontend;
const App = () => {
    return (
        <div>
            <h1>Word to PDF Converter</h1>
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