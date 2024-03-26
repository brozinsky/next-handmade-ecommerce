'use client'
import React from "react";
import Select from "./Select";

type TInputOption = {
  id: number;
  value: string;
  title: string;
};

type TProps = {
    options: TInputOption[];
    state: string;
    setState: (value: string) => void;
};

export default async function ColorSelect({
  options,
  state,
  setState,
}: TProps) {
  return (
    <Select
      label={"Kolory"}
      options={options}
      state={state}
      setState={setState}
    />
  );
}
