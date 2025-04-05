import { useState } from "react";
import axios from "axios";
import bgVideo from "../assets/BG_VIDEO.mp4";
import NavBar from './../components/NavBar';

function HeartPredictionForm() {
  const [formData, setFormData] = useState({
    age: "", sex: "", cp: "", trestbps: "", chol: "", fbs: "",
    restecg: "", thalach: "", exang: "", oldpeak: "",
    slope: "", ca: "", thal: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      age: Number(formData.age),
      sex: Number(formData.sex),
      cp: Number(formData.cp),
      trestbps: Number(formData.trestbps),
      chol: Number(formData.chol),
      fbs: Number(formData.fbs),
      restecg: Number(formData.restecg),
      thalach: Number(formData.thalach),
      exang: Number(formData.exang),
      oldpeak: parseFloat(formData.oldpeak),
      slope: Number(formData.slope),
      ca: Number(formData.ca),
      thal: Number(formData.thal),
    };

    try {
      const response = await axios.post("http://192.168.161.49:5000/api/predict", payload, {
        headers: { "Content-Type": "application/json" },
      });
      setResult(response.data.prediction);
    } catch (error) {
      console.error("Prediction error:", error);
      setResult("Error making prediction.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 p-36" >
        <NavBar />
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Glassmorphism Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-10 space-y-6 z-10"
      >
        <h2 className="text-4xl font-bold text-center text-white drop-shadow-lg">
           Heart Disease Prediction
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white">
          {[
            { label: "Age", name: "age" },
            { label: "Sex (0 = female, 1 = male)", name: "sex" },
            { label: "Chest Pain Type (0-3)", name: "cp" },
            { label: "Resting Blood Pressure", name: "trestbps" },
            { label: "Serum Cholesterol (mg/dl)", name: "chol" },
            { label: "Fasting Blood Sugar > 120 (1 = true, 0 = false)", name: "fbs" },
            { label: "Resting ECG Results (0-2)", name: "restecg" },
            { label: "Max Heart Rate Achieved", name: "thalach" },
            { label: "Exercise Induced Angina (1 = yes, 0 = no)", name: "exang" },
            { label: "Oldpeak (ST Depression)", name: "oldpeak" },
            { label: "Slope of ST Segment (0-2)", name: "slope" },
            { label: "Number of Major Vessels (0-3)", name: "ca" },
            { label: "Thal (0 = normal, 1 = fixed, 2 = reversible)", name: "thal" },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-white mb-1">{label}</label>
              <input
                type="number"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/80 px-4 py-2 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-red-400 shadow-inner"
              />
            </div>
          ))}
        </div>

        <button
        
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:from-red-600 hover:to-orange-700 transition duration-300"
        >
           Submit for Prediction
        </button>

        {result !== null && (
          <div className="mt-6 text-center text-xl font-semibold text-white drop-shadow-md">
            {typeof result === "number" ? (
              result === 1 ? (
                <span className="text-red-300">
                  ⚠️ The person is <strong>likely</strong> to have heart disease.
                </span>
              ) : (
                <span className="text-green-300">
                  ✅ The person is <strong>not likely</strong> to have heart disease.
                </span>
              )
            ) : (
              <span className="text-yellow-200">{result}</span>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default HeartPredictionForm;