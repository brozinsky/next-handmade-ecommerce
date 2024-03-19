"use client";
import React from "react";
import { colors } from "@/utils/colors";
import Select from "../ui/Select/Select";

interface PropsType {
  color: string;
  setColor: (color: string) => void;
}

export default function DropdownColors({ color, setColor }: PropsType) {
  return (
    <Select
        label={"Kolor"}
        options={colors}
        state={color}
        setState={setColor}
      />
  );
}
