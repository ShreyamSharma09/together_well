import NavBar from "../components/NavBar";

function Scanned() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-100 via-white to-purple-100">
      <NavBar />
      <div className="flex flex-col items-center justify-center text-center px-6 py-20 text-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
           Scanned PDF Data Summary
        </h1>
        <p className="text-lg mb-10 max-w-2xl text-gray-700">
          Here’s what we extracted from your health report. (This is sample hardcoded content.)
        </p>

        <div className="bg-white/70 backdrop-blur-lg border border-purple-200 rounded-2xl p-8 shadow-xl max-w-3xl w-full text-left space-y-8">
          <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-purple-700"> Non-HDL Cholesterol</h2>
            <p className="mt-2 text-gray-700">
              80.1 mg/dL (recent result) – Elevated compared to the reference interval of 0–129.9.
              Previous values: 134.2, 158.2, 121.5.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-purple-700">LDL Cholesterol</h2>
            <p className="mt-2 text-gray-700">
              53.6 mg/dL (recent result) – Within range (30–99.9), though trending upward (from
              67.9 to 104.8).
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-purple-700">Alkaline Phosphatase</h2>
            <p className="mt-2 text-gray-700">
              119 U/L (recent result) – Above the normal range of 46–116, and increasing over time.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-purple-700">Liver Function Tests</h2>
            <p className="mt-2 text-gray-700">
              All values (Bilirubin, Protein, Albumin, Transaminases) are within normal ranges,
              indicating stable metabolic health.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-purple-700"> Thyroid Function</h2>
            <p className="mt-2 text-gray-700">
              T3 Total at 0.98 ng/mL – Well within the 0.60–1.81 reference range, with consistency
              over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scanned;