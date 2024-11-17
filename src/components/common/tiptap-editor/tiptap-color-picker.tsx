import type { Editor } from "@tiptap/react";
import { CircleIcon, CircleOffIcon, PipetteIcon } from "lucide-react";

import { ActionsGroup, Button } from "./tiptap-action";

interface Props {
  editor: Editor | null;
  colorPalette?: string[];
}

export const TiptapColorPicker: React.FC<Props> = ({ editor, colorPalette = defaultColorPalette }) => {
  if (!editor) return null;

  const removeColor = () => {
    editor.chain().focus().unsetColor().run();
  };

  const setColor = (color: string) => {
    editor.chain().focus().setColor(color).run();
  };

  return (
    <div className="flex gap-x-1">
      <div className="relative flex  size-7 cursor-pointer items-center justify-center rounded-md border bg-background p-1 hover:bg-muted">
        <PipetteIcon className="size-3.5" />
        <input
          id="tiptap-color-picker"
          className="absolute w-full cursor-pointer opacity-0"
          type="color"
          // @ts-expect-error
          onInput={(event) => setColor(event.target.value)}
        />
      </div>

      <ActionsGroup editor={editor}>
        {colorPalette.map((color) => (
          <Button key={color} onClick={() => setColor(color)} active={editor.isActive("textStyle", { color })}>
            <CircleIcon className="size-3.5" style={{ fill: color, color }} />
          </Button>
        ))}
      </ActionsGroup>
      <Button onClick={removeColor}>
        <CircleOffIcon className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
};

const defaultColorPalette = [
  "#000000",
  "#ff0000",
  "#ff9900",
  "#ffff00",
  "#00ff00",
  "#00ffff",
  "#0000ff",
  "#9900ff",
  "#ff00ff",
];

export default TiptapColorPicker;
