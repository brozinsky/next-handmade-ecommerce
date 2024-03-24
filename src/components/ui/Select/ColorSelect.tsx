'use client'
import React from "react";
import Select from "./Select";

type InputOptionType = {
  id: number;
  value: string;
  title: string;
};

type PropsType = {
    options: InputOptionType[];
    state: string;
    setState: (value: string) => void;
};

export default async function ColorSelect({
  options,
  state,
  setState,
}: PropsType) {
  return (
    <Select
      label={"Kolory"}
      options={options}
      state={state}
      setState={setState}
    />
  );
}
