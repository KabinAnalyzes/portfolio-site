import React from 'react';
import { Worker, Viewer, WorkerProps } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function PdfViewer() {
  const pdfUrl = '/public/Credit.pdf'; // Replace with the actual path to your PDF

  return (
    <div style={{ height: '100vh' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${WorkerProps.workerVersion}/build/pdf.worker.min.js`}>
        <Viewer fileUrl={pdfUrl} />
      </Worker>
    </div>
  );
}

export default PdfViewer;
