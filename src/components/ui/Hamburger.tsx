import React, { useState } from "react";

type TProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Hamburger({ isOpen, setIsOpen }: TProps) {
  return (
    <div className="flex lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="text-neutral-800 hover:text-neutral-900 focus:outline-none focus:text-neutral-900"
        aria-label="toggle menu"
      >
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h16M4 16h16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
