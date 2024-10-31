"use client";
import { useEffect, useState } from "react";

import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

interface Props {
  value?: Gender;
  disabled?: boolean;
  width?: number;
  placeholder?: string;
  closedOnSelect?: boolean;
  useValueType?: "default" | "selectedValues";
  selectedValues?: Gender[];
  onChange?: (value: Gender | undefined) => void;
  onSelect?: (customer: Gender | undefined) => void;
  preview?: boolean;
}

export const GenderSelect: React.FC<Props> = (props) => {
  const [value, setValue] = useState<Gender>(props.value || Gender.MALE);

  useEffect(() => {
    if (props.value && props.value !== value) setValue(props.value);
  }, [props.value]);

  return (
    <RadioGroup
      className="flex items-center space-x-2"
      value={value}
      onChange={(val) => {
        setValue(val as unknown as Gender);
        props.onChange?.(val as unknown as Gender);
        props.onSelect?.(val as unknown as Gender);
      }}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value={Gender.MALE} id="r1" />
        <Label htmlFor="r1">Male</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value={Gender.FEMALE} id="r2" />
        <Label htmlFor="r2">Female</Label>
      </div>
    </RadioGroup>
  );
};
