import { XCircleIcon } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface Props {
  value?: string;
  /**
   * @param value JSON string
   * @returns
   */
  onChange?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  addText?: string;
}

export const MultiLineInput: React.FC<Props> = (props) => {
  const { placeholder, addText = "Add" } = props;
  const [lines, setLines] = useState<string[]>([""]);
  const values = useRef<string[]>([]);
  const id = useId();

  useEffect(() => {
    if (props.value) {
      try {
        const jsonValue = JSON.stringify(lines.filter(Boolean));
        if (jsonValue !== props.value) {
          const parsed = JSON.parse(props.value);
          if (Array.isArray(parsed)) {
            setLines(parsed);
            values.current = parsed;
          }
        }
      } catch (_e) {}
    }
  }, [props.value]);

  const addNewLine = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setLines([...lines, ""]);
  };

  const removeLine = (e: React.MouseEvent<HTMLElement>, index: number) => {
    e.preventDefault();
    setLines(lines.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-[300px] space-y-1">
      {lines.map((line, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: This is a dynamic list
        <div key={`${id}-${i}`} className="flex items-center gap-2">
          <Input
            id={id + i}
            placeholder={placeholder}
            defaultValue={line}
            disabled={props.disabled}
            onChange={(e) => {
              const value = e.target.value;
              values.current[i] = value;
              const jsonValue = JSON.stringify(values.current.filter(Boolean));
              props.onChange?.(jsonValue);
            }}
          />
          <Button size="icon-sm" variant="ghost" onClick={(e) => removeLine(e, i)} disabled={props.disabled}>
            <XCircleIcon className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      ))}
      <div>
        <Button size="sm" variant="secondary" onClick={addNewLine} className="mt-2" disabled={props.disabled}>
          {addText}
        </Button>
      </div>
    </div>
  );
};

export default MultiLineInput;
