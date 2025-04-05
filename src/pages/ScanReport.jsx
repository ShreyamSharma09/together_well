import { useState } from "react";
import qrImage from "../assets/qr.jpg"; // QR code
import bgImage from "../assets/bgg.jpg"; // Background image
import NavBar from "../components/NavBar";

function ScanReport() {
  const [pdf, setPdf] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setPdf(selectedFile);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleSubmit = () => {
    if (!pdf) {
      alert("Please upload a PDF before submitting.");
    } else {
      alert(`Submitting: ${pdf.name}`);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
  <NavBar />
  <img
    src={bgImage}
    alt="Background"
    className="fixed top-0 left-0 w-full h-full object-cover z-0"
  />

  {/* Heading at the top center */}
  <h1 className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-white text-center p-24">
    Upload. Understand. Uplift your health.
  </h1>

  {/* Content centered */}
  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-white">
    <img
      src={qrImage}
      alt="QR Code"
      className="w-40 h-40 ml-6  mb-6 object-cover"
    />

    <label
      htmlFor="pdf-upload"
      className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center cursor-pointer"
    >
      Upload PDF
    </label>

    <input
      id="pdf-upload"
      type="file"
      accept="application/pdf"
      onChange={handleFileChange}
      className="hidden"
    />

    {pdf && (
      <>
        <p className="mt-4 text-sm text-white-300">
          Uploaded: <span className="font-medium">{pdf.name}</span>
        </p>

        <button
          type="button"
          onClick={handleSubmit}
          className="mt-4 py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
        >
          Submit
        </button>
      </>
    )}
  </div>
</div>


  );
}

export default ScanReport;






