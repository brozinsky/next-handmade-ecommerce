import React from "react";
import { TTextMark } from "./types";

export default function renderText(
  text: string,
  marks: TTextMark[]
): JSX.Element | string {
  if (!marks || marks.length === 0) return text;
  return marks.reduce<JSX.Element | string>((acc, mark) => {
    switch (mark) {
      case "strong":
        return (
          <strong className="font-bold" key={mark}>
            {acc}
          </strong>
        );
      case "em":
        return <em key={mark}>{acc}</em>;
      default:
        return acc;
    }
  }, text);
}
