import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer.jsx";
import { Timeline } from "../components/Timeline";

const HomePage = () => {
  const data = [
    {
      title: "Track Your Family's Health",
      content: (
        <div>
          <p className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white drop-shadow-sm hover:drop-shadow-[0_0_10px_rgba(255,192,203,0.6)] transition-all duration-300">
            Easily track your whole family's health with a smooth, intuitive experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Images or illustrations can be added here */}
          </div>
        </div>
      ),
    },
    {
      title: "Medical Report Analysis",
      content: (
        <div className="mt-6">
  <p className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white drop-shadow-sm hover:drop-shadow-[0_0_10px_rgba(255,192,203,0.6)] transition-all duration-300">
    Get diet and medication recommendations based on your health history.
  </p>
  <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mt-2 drop-shadow-sm hover:drop-shadow-[0_0_8px_rgba(255,182,193,0.5)] transition-all duration-300">
    Personalized and intelligent suggestions — no generic advice.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
    {/* You can place any visuals or illustrations here */}
  </div>
</div>


      ),
    },
    {
      title: "Medication Reminder",
      content: (
        <div>
          <p className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white drop-shadow-sm hover:drop-shadow-[0_0_10px_rgba(255,192,203,0.6)] transition-all duration-300">
            Never miss a dose again—3 reminders already sent today!
          </p>
          <ul className="text-lg font-semibold text-gray-600 dark:text-gray-300 mt-2 drop-shadow-sm hover:drop-shadow-[0_0_8px_rgba(255,182,193,0.5)] transition-all duration-300">
            <li>Took medications on time</li>
            <li>Visible results & improvement</li>
            <li>Upload medical reports</li>
            <li>No generic advisory</li>
            <li>Easy to use for elders</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Images or illustrations can be added here */}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#FCE3EC] via-[#F9F8FD] to-[#E0EAFC] text-gray-900">
      <NavBar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[90vh] px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight tracking-tight">
          Wellbeing of Your Family,
          <br className="hidden md:inline" />
          <span className="text-purple-600">Backed by Smart Insights</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          Personalized recommendations for every member. Track, scan, and thrive—together.
        </p>
        <form className="mt-8 w-full max-w-md">
          <input
            type="text"
            name="chat"
            className="w-full px-5 py-3 rounded-xl bg-white shadow-md border border-gray-300 text-gray-800
                       focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500 transition"
            placeholder="Talk to Med Cat!"
          />
        </form>
      </section>

      {/* Timeline Section */}
      <section className="w-full px-4 py-16 md:px-12 bg-white/70 backdrop-blur-sm">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Wellbeing of the Whole Family
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Personalized recommendations to help your family live healthier, together.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Here’s a timeline of how we support your journey.
          </p>
        </div>

        {/* Timeline inside styled card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 transition-all duration-300 hover:shadow-2xl">
          <Timeline data={data} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;