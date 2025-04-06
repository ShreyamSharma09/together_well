"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="min-w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      {/* CARD INTRO */}
      <div className="flex justify-center px-4 pt-10 md:pt-16 pb-10">
  <div className="relative group max-w-4xl w-full">
    <div className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition duration-300 bg-pink-300"></div>

    <div className="relative z-10 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-3xl p-6 md:p-10 shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-gray-900 dark:text-white text-center">
        Wellbeing of Whole Family along with Personalized Recommendation
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg text-center">
        Here’s a timeline of my journey.
      </p>
    </div>
  </div>
</div>



      {/* TIMELINE CONTENT */}
      <motion.div
  ref={ref}
  className="relative max-w-7xl mx-auto pb-20 pt-12 px-4 sm:px-6 lg:px-8 rounded-xl border border-pink-100 dark:border-neutral-800 bg-gradient-to-br from-white via-pink-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 shadow-md hover:shadow-xl transition-all duration-300"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  {data.map((item, index) => (
    <div
      key={index}
      className="flex justify-start pt-10 md:pt-40 md:gap-10"
    >
      {/* Left vertical dot + title (large screens) */}
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-10 absolute left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2 shadow-md" />
        </div>
        <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 transition-colors duration-300 hover:text-black dark:hover:text-white">
          {item.title}
        </h3>
      </div>

      {/* Right timeline content */}
      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-300">
          {item.title}
        </h3>
        {item.content}
      </div>
    </div>
  ))}

  {/* Vertical Progress Line */}
  <div
    style={{
      height: height + "px",
      background:
        "linear-gradient(to bottom, transparent 0%,rgb(255, 0, 0) 40%, transparent 99%)",
      maskImage:
        "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
      WebkitMaskImage:
        "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
    }}
    className="absolute left-8 top-0 w-[2px] overflow-hidden"
  >
    <motion.div
      style={{
        height: heightTransform,
        opacity: opacityTransform,
      }}
      className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-red-500 to-transparent rounded-full"
    />
  </div>
</motion.div>

    </div>
  );
};