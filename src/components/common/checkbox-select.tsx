import { useEffect, useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  options: { label: string; value: string }[];
  onChange?: (value: string[]) => void;
  disabled?: boolean;
  value?: string[];
}

export const CheckboxSelect: React.FC<Props> = ({ options, onChange, disabled, ...props }) => {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (props.value) {
      setSelected(props.value);
    }
  }, [props.value]);

  const handleOnChange = (checked: boolean, value: string) => {
    if (checked) {
      const values = [...selected, value];
      setSelected(values);
      onChange?.(values);
    } else {
      const values = selected.filter((s) => s !== value);
      setSelected(values);
      onChange?.(values);
    }
  };

  return (
    <div className={cn("grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3", props.className)}>
      {options.map(({ value, label }) => (
        <div key={value || label} className="flex items-center space-x-2">
          <Checkbox
            id={value}
            disabled={disabled}
            checked={selected.includes(value)}
            onCheckedChange={(checked) => {
              if (checked !== "indeterminate") handleOnChange(checked, value);
            }}
          />
          <label
            htmlFor={value}
            className="truncate text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        </div>
      ))}
    </div>
  );
};
