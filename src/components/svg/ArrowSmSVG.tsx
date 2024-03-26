import { TSVG } from "@/utils/types";
import clsx from "clsx";

export default function ArrowSmSVG({
  direction = "bottom",
  className,
  width = "18",
  pathClass = "stroke-primary-700",
}: TSVG) {
  const directionClass = {
    right: "",
    left: "rotate-180",
    top: "-rotate-90",
    bottom: "rotate-90",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, direction && directionClass[direction])}
      width={width}
      height={width}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        className={pathClass}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m8.91 19.92 6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
      />
    </svg>
  );
}
