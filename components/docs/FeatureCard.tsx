"use client";

import React from "react";

export default function FeatureCard({ img, text }) {
  return (
    <article
      className="group bg-white border rounded-2xl 
      p-4 sm:p-6 shadow-sm 
      transition-all duration-200 hover:-translate-y-1 hover:shadow-lg
      flex flex-col items-center text-center
      w-full"
    >
      <img
        src={img}
        alt={text}
        className="
          h-12 w-12 sm:h-20 sm:w-20
          object-contain
          transition-transform duration-200
          group-hover:scale-105
        "
      />

      <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-gray-900 font-medium">
        {text}
      </p>
    </article>
  );
}
