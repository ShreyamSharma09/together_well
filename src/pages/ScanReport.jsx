import { useState } from "react";
import { useNavigate } from "react-router-dom";
import qrImage from "../assets/qr.jpg";
import NavBar from "../components/NavBar";

function ScanReport() {
  const [pdf, setPdf] = useState(null);
  const navigate = useNavigate();

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
      navigate("/scan-result");
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-pink-100 via-white to-purple-100">
      <NavBar />

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-gray-800">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center drop-shadow-lg">
          Upload. Understand. <span className="text-purple-600">Uplift</span> your health.
        </h1>

        {/* QR Image Card */}
        <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-xl w-full max-w-md">
          <img
            src={qrImage}
            alt="QR Code"
            className="w-44 h-44 object-cover rounded-lg mx-auto mb-6 shadow-md"
          />

          {/* Upload PDF Button */}
          <label
            htmlFor="pdf-upload"
            className="block py-2.5 px-6 text-sm font-semibold text-white bg-purple-600 rounded-full cursor-pointer shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300 ease-in-out text-center"
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

          {/* Submit button only shows after upload */}
          {pdf && (
            <>
              <p className="mt-4 text-sm text-gray-700 text-center">
                Uploaded: <span className="font-medium">{pdf.name}</span>
              </p>

              <button
                type="button"
                onClick={handleSubmit}
                className="mt-6 w-full py-2.5 px-6 text-sm font-semibold bg-green-500 text-white rounded-full hover:bg-green-600 hover:shadow-lg shadow-md transition-all duration-300 ease-in-out"
              >
                Submit &rarr;
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScanReport;