'use client'
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, ReactNode } from "react";

type TProps = {
  children: ReactNode;
  trigger?: ReactNode;
  isCenter?: boolean;
  classes?: string;
}

export default function Dropdown({ children, trigger, isCenter = false, classes }: TProps) {
  return (
    <div id="Dropdown" className={classes}>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button as={"div"}>
            {trigger}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={clsx(
              "z-50 absolute mt-3 w-56 origin-top-right divide-y divide-neutral-800 rounded-md bg-neutral-500",
              isCenter ? "left-1/2 -translate-x-1/2" : "right-0"
            )}
          >
            {children}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
