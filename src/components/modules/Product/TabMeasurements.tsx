import React from "react";
import { TTextMark } from "@/utils/types";
import renderText from "@/utils/renderText";

const TabMeasurements = ({ measurements }) => {
  return (
    <div>
      {measurements &&
        measurements.map((block: any, blockIndex: number) => {
          return (
            <React.Fragment key={blockIndex}>
              {block.children.map(
                (
                  child: { text: string; marks: TTextMark[] },
                  childIndex: string
                ) => (
                  <p key={childIndex} className="font-light">
                    {renderText(child.text, child.marks)}
                  </p>
                )
              )}
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default TabMeasurements;
