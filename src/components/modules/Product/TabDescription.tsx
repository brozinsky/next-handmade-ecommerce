import { TProductSchema } from "@/utils/types";
import React from "react";

export default function TabDescription({ product }: {product: TProductSchema}) {
  return (
    <div className="space-y-2 font-light">
      {product.description &&
        product.description.map((block: any, blockIndex: any) => (
          <React.Fragment key={blockIndex}>
            {block.children.map((child: any, blockIndex: any) => (
              <p key={blockIndex}>{child.text}</p>
            ))}
          </React.Fragment>
        ))}
    </div>
  );
}
