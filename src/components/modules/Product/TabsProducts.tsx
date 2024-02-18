import clsx from "clsx";
import React, { useState } from "react";
import TabDescription from "./TabDescription";

export default function TabsProducts({product, products, searchParams}) {
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
          <div>
            <p className="font-light">
              <strong className="font-semibold">Wysokość:</strong> 40 cm
            </p>
            <p className="font-light">
              <strong className="font-semibold">Szerokość:</strong> 40cm
            </p>
            <p className="font-light">
              <strong className="font-semibold">Szerokość boku:</strong> 12 cm
            </p>
          </div>
        )}
        {tab == 2 && (
        <div className="product-shipping-info">
          <div className="font-light">Paczkomaty inPost: 18 zł</div>
          <div className="font-light">Poczta Polska - priorytet: 17 zł</div>
        </div>
      )}
      </div>
  );
}
