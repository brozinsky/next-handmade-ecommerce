'use client'
import clsx from "clsx";
import React, { useState } from "react";
import TabDescription from "./TabDescription";
import TabMeasurements from "./TabMeasurements";
import TabShipping from "./TabShipping";

export default function TabsProducts({product, products, searchParams, shipping}) {
  const [tab, setTab] = useState(0);

  return (
      <div className="w-full space-y-4">
        <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
          <button
            className={clsx(
              tab == 0
                ? "bg-gray-100 text-neutral-900"
                : "hover:text-gray-600 hover:bg-gray-50",
              "inline-block p-4  rounded-t-lg "
            )}
            onClick={() => setTab(0)}
          >
            <span className={"text-lg font-medium cursor-pointer"}>Opis</span>
          </button>
          <button
            className={clsx(
              tab == 1
                ? "bg-gray-100 text-neutral-900"
                : "hover:text-gray-600 hover:bg-gray-50",
              "inline-block p-4  rounded-t-lg "
            )}
            onClick={() => setTab(1)}
          >
            <span className={"text-lg font-medium cursor-pointer"}>
              Wymiary
            </span>
          </button>
          <button
            className={clsx(
              tab == 2
                ? "bg-gray-100 text-neutral-900"
                : "hover:text-gray-600 hover:bg-gray-50",
              "inline-block p-4  rounded-t-lg "
            )}
            onClick={() => setTab(2)}
          >
            <span className={"text-lg font-medium cursor-pointer"}>
              Koszty wysyłki
            </span>
          </button>
        </div>
        {tab == 0 && (
          <TabDescription product={product}/>
        )}
        {tab == 1 && (
          <TabMeasurements />
        )}
        {tab == 2 && (
        <TabShipping shipping={shipping}/>
      )}
      </div>
  );
}
