import React from "react";

type Props = {
    width: number;
    height: number;
}

export default function LogoSVG({width, height}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 147 147"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_125_142"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="19"
        y="19"
        width="108"
        height="108"
      >
        <circle
          cx="73.0824"
          cy="73.0824"
          r="53.5"
          transform="rotate(-30 73.0824 73.0824)"
          className="fill-primary-500"
        />
      </mask>
      <g mask="url(#mask0_125_142)">
        <rect
          width="110"
          height="8"
          transform="matrix(0.866025 -0.5 -0.5 -0.866025 51.7681 147.165)"
          className="fill-primary-500"
        />
        <rect
          width="110"
          height="8"
          transform="matrix(0.866025 -0.5 -0.5 -0.866025 18.7681 90.0071)"
          className="fill-primary-500"
        />
        <rect
          width="110"
          height="9"
          transform="matrix(0.866025 -0.5 -0.5 -0.866025 43.7681 133.308)"
          className="fill-primary-500"
        />
        <rect
          width="110"
          height="9"
          transform="matrix(0.866025 -0.5 -0.5 -0.866025 10.7681 76.1506)"
          className="fill-primary-500"
        />
        <rect
          width="110"
          height="8"
          transform="matrix(0.866025 -0.5 -0.5 -0.866025 35.2681 118.586)"
          className="fill-primary-500"
        />
        <rect
          width="110"
          height="8"
          transform="matrix(0.866025 -0.5 -0.5 -0.866025 2.26807 61.4282)"
          className="fill-primary-500"
        />
        <rect
          width="110"
          height="9"
          transform="matrix(0.866025 -0.5 -0.5 -0.866025 27.2681 104.729)"
          className="fill-primary-500"
        />
      </g>
    </svg>
  );
}
