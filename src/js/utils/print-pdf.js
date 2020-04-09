'use strict';
import html2pdf from 'html2pdf.js';

export default function printPDF() {
    const pdfTable = document.querySelector('.table-section');
    const opt = {
        filename: `Товарный чек №${localStorage.getItem('checkNumber')}.pdf`,
        html2canvas: {scale: 2},
        jsPDF: {}
    }
    html2pdf()
        .set(opt)
        .from(pdfTable)
        .save();
}