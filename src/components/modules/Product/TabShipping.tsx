import React from "react";
import { getDescription } from "../../../../sanity/sanity-utils";
import renderText from "@/utils/renderText";
import { TTextMark } from "@/utils/types";

export default function TabShipping({ shipping }) {
  return (
    <div className="product-shipping-info">
      {shipping.description &&
        shipping.description.map((block: any, blockIndex: number) => {
          return (
            <React.Fragment key={blockIndex}>
              {block.children.map(
                (
                  child: { text: string; marks: TTextMark[] },
                  childIndex: string
                ) => (
                  <p key={childIndex} className="font-light">{renderText(child.text, child.marks)}</p>
                )
              )}
            </React.Fragment>
          );
        })}
    </div>
  );
}
