import React from 'react';

function PdfViewer() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="/path/to/your.pdf"
        style={{ width: '100%', height: '100%' }}
        frameBorder="0"
        title="PDF Viewer"
      ></iframe>
    </div>
  );
}

export default PdfViewer;
