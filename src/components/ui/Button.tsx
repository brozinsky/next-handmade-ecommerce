"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { cva } from "class-variance-authority";
import { X, Loader, ArrowUp } from "react-feather";
import SpinnerSVG from "../svg/SpinnerSVG";
import ArrowSmSVG from "../svg/ArrowSmSVG";
import { TButton, TLoadingWrapper } from "@/utils/types";

const LoadingWrapper = ({ isLoading, children }: TLoadingWrapper) => {
  return isLoading ? <div className="opacity-0">{children}</div> : children;
};

export default function Button({
  children,
  isLoading = false,
  onClick,
  variant = "neutral",
  icon,
  className,
  shape = "custom",
  size = "md",
  label,
  isFullWidth,
}: TButton) {
  const classes = cva(
    [
      className,
      "font-regular tracking-wider relative flex items-center justify-center w-fit gap-2 cursor-pointer",
    ],
    {
      variants: {
        variant: {
          primary:
            "text-white font-regular bg-primary-500 hover:bg-primary-600 ",
          neutral: "bg-neutral-200/70 hover:bg-neutral-200",
          outlined:
            "text-primary-500 hover:text-white border-2 border-primary-500 hover:bg-primary-800",
          "outlined-no-hover":
            "text-primary-500 border-2 font-medium border-primary-500",

          ghost:
            "group bg-transparent-500 hover:bg-neutral-500 text-neutral-500 hover:text-neutral-500 font-regular",
        },
        shape: {
          custom: "rounded-tl-xl rounded-br-xl",
          "custom-reversed": "rounded-tr-xl rounded-bl-xl",
          rectangle: "rounded-xl",
          circle: "rounded-full",
          square: "rounded-xl",
        },
        size: {
          md: "px-6 py-3",
          sm: "px-2 py-2",
        },
        isLoading: {
          true: "opacity-50 hover:bg-primary-500 cursor-default",
        },
        isFullWidth: {
          true: "w-full",
        },
      },
      compoundVariants: [
        {
          size: "sm",
          shape: "square",
          className: "px-2 py-2",
        },
        {
          size: "sm",
          shape: "circle",
          className: "px-2 py-2",
        },
      ],
    }
  );

  return (
    <motion.button
      disabled={isLoading}
      aria-label={label}
      onClick={onClick}
      className={classes({
        variant,
        shape,
        size,
        isLoading,
        isFullWidth,
      })}
      whileTap={isLoading ? undefined : { scale: 0.9 }}
    >
      <LoadingWrapper isLoading={isLoading}>
        {icon === "close" && <X />}
        {icon === "arrow-sm-top" && <ArrowUp />}
      </LoadingWrapper>
      <LoadingWrapper isLoading={isLoading}>
        <span className="font-regular">{children}</span>
        {icon === "arrow-down" && <ArrowSmSVG />}
      </LoadingWrapper>
      {isLoading && (
        <div className="absolute -rotate-90 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <SpinnerSVG className="origin-center" />
        </div>
      )}
    </motion.button>
  );
}
