import React from "react";

export default function Separator({ direction = "horizontal" }) {
  if (direction == "horizontal") {
    return (
      <div
        data-orientation="horizontal"
        role="separator"
        className="my-2 bg-neutral-200 rounded-lg h-[1px] w-full"
      ></div>
    );
  }
  return (
    <div
      data-orientation="vertical"
      role="separator"
      className="mx-2 bg-neutral-200 rounded-lg w-[1px] h-full"
    ></div>
  );
}
