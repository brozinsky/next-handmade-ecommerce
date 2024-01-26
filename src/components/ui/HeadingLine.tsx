import clsx from "clsx";
import React from "react";

export default function HeadingLine({ children, textPosition = "left" }) {
  return (
    <div className="flex items-center gap-8 mb-6">
      {(textPosition === "right" || textPosition === "center") && (
        <span className="flex-1 h-px bg-primary-800"></span>
      )}
      <h2
        className={clsx(
          textPosition === "left" && "text-left",
          textPosition === "right" && "text-left",
          textPosition === "center" && "text-left",
          "heading-second text-primary-800"
        )}
      >
        {children}
      </h2>
      {(textPosition === "left" || textPosition === "center") && (
        <span className="flex-1 h-px bg-primary-800"></span>
      )}
    </div>
  );
}
