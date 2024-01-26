import React from "react";

export default function CardFeature() {
  return (
    <section className="flex flex-col items-center p-8 space-y-3 text-center bg-white shadow-md rounded-custom">
      <span className="inline-block p-3 rounded-full text-primary-500 bg-primary-100 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </span>
      <h3 className="text-xl font-semibold capitalize text-neutral-700 ">
        Zero Configuration
      </h3>
      <p className="text-neutral-500 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab
        nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
      </p>
    </section>
  );
}
