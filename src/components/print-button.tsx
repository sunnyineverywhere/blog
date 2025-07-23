"use client";

export default function PrintButton() {
  const handlePrint = () => {
    // Hide all elements except the resume content
    const resumeContent = document.getElementById('resume-content');
    const body = document.body;
    const originalContents = body.innerHTML;
    
    if (resumeContent) {
      // Create a temporary div with only the resume content
      const printContents = resumeContent.innerHTML;
      
      // Replace body content with just the resume
      body.innerHTML = `
        <div style="font-family: system-ui, -apple-system, sans-serif;">
          ${printContents}
        </div>
      `;
      
      // Add print-specific styles
      const printStyles = document.createElement('style');
      printStyles.textContent = `
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          body {
            margin: 0 !important;
            padding: 0 !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `;
      document.head.appendChild(printStyles);
      
      // Trigger print
      window.print();
      
      // Restore original content after printing
      setTimeout(() => {
        body.innerHTML = originalContents;
        document.head.removeChild(printStyles);
      }, 100);
    }
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg transition-colors font-medium shadow-lg"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
      Print Resume
    </button>
  );
}