"use client";
import useCartStore from "@/stores/useCartStore";
import { getTotalQuantity } from "@/utils/function";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  setIsOpen: (isOpen: boolean) => void;
  classes?: string;
};

type AnimationInstance = {
  id: number;
};

const LinkCart = ({ setIsOpen, classes }: Props) => {
  const [animationInstances, setAnimationInstances] = useState<
    AnimationInstance[]
  >([]);
  const { items } = useCartStore();

  useEffect(() => {
    const newInstance = { id: Date.now() };
    setAnimationInstances((prevInstances) => [...prevInstances, newInstance]);

    setTimeout(() => {
      setAnimationInstances((prevInstances) =>
        prevInstances.filter((instance) => instance.id !== newInstance.id)
      );
    }, 1000);
  }, [getTotalQuantity(items)]);

  return (
    <Link
      onClick={() => setIsOpen(false)}
      className={clsx(
        classes,
        "font-light whitespace-nowrap relative my-2 transition-colors duration-300 transform md:mx-4 md:my-0"
      )}
      href={"/koszyk"}
    >
      <svg
        className="block w-5 h-5 MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          className="fill-primary-800"
          d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"
        ></path>
      </svg>
      <div className="absolute -right-[10px] -bottom-[10px]">
        <span className="font-medium text-primary-800 z-10 w-[18px] h-[18px] text-xs bg-white rounded-full flex-center-center">
          {getTotalQuantity(items)}
        </span>
        {animationInstances.map((instance) => (
          <span
            key={instance.id}
            className="absolute top-0 left-0 w-[18px] h-[18px] rounded-full bg-primary-500 -z-10 animate-ping"
          ></span>
        ))}
      </div>
    </Link>
  );
};

export default LinkCart;
