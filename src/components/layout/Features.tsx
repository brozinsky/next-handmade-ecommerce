import React from "react";
import CardFeature from "../modules/CardFeature";

export default function Features() {
  return (
    <section id="Features" className="bg-white py-section">
      <div className="container container--sm">
        <h2 className="mb-8 text-2xl font-semibold text-center capitalize lg:mb-12 text-neutral-800 lg:text-3xl">
          explore our
          <br /> awesome <span className="text-primary-500">Components</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <CardFeature />
          <CardFeature />
          <CardFeature />
        </div>
      </div>
    </section>
  );
}
