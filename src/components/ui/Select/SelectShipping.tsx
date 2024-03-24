'use client'
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ArrowSmSVG from "../../svg/ArrowSmSVG";

type State = string;
type SetState = (value: string) => void;
type InputOptionType = {
  id: number;
  value: string;
  title: string;
};

type Props = {
  label?: string;
  options: InputOptionType[];
  defaultValue?: string;
  variant?: "base" | "ghost";
  state: State;
  setState: SetState;
  displayValue?: string;
};

export default function SelectShipping({
  variant = "base",
  label,
  options,
  state,
  setState,
  displayValue,
}: Props) {

  return (
    <Listbox
      id="SelectShipping"
      as={"div"}
      className={`select-input select-input--${variant}`}
      value={state}
      onChange={setState}
    >
      {label && (
        <Listbox.Label className={"select-input__label block truncate"}>
          {label}
        </Listbox.Label>
      )}
      <Listbox.Button className={"select-input__button relative"}>
        {displayValue
          ? displayValue
          : state !== '' ? state : "Wybierz"}
        <ArrowSmSVG />
      </Listbox.Button>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options className="select-input__list">
          {options && options.map(({ id, title, value }) => (
            <Listbox.Option
              key={id}
              className={({ active }: any) =>
                `select-input__option ${
                  active && "select-input__option--active"
                }`
              }
              value={value}
            >
              <span
                className={`block truncate ${
                  value === state ? "font-bold" : ""
                }`}
              >
                {title}
              </span>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}
