import React from "react";
import { TShipping } from "@/utils/types";

export default function TabShipping({ shipping }: { shipping: TShipping[] }) {
  return (
    <div className="space-y-2">
      {shipping.length > 0 &&
        shipping.map((item: TShipping) => {
          return (
            <div key={item.slug}>
              <p>
                {item.name}: {item.price} zł
              </p>
            </div>
          );
        })}
    </div>
  );
}
