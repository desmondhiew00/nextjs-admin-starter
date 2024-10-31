import type { Editor } from "@tiptap/react";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import { ActionButton, ActionsGroup } from "./tiptap-action";
import { TiptapColorPicker } from "./tiptap-color-picker";

type Tool = "text-style" | "heading" | "line" | "align" | "color" | "link";
interface TiptapToolbarProps {
  className?: string;
  editor: Editor | null;
  tools?: Tool[];
}
export const TiptapToolbar: React.FC<TiptapToolbarProps> = ({ editor, tools, className }) => {
  if (!editor) return null;

  const show = (tool: Tool) => !tools || tools?.includes(tool);

  return (
    <div className={cn("flex flex-col gap-y-2 rounded-t-md border-l border-r border-t p-2", className)}>
      <Row>
        {show("text-style") && (
          <ActionsGroup editor={editor}>
            <ActionButton control="bold" />
            <ActionButton control="italic" />
            <ActionButton control="underline" />
            <ActionButton control="strike" />
            <ActionButton control="highlight" />
            <ActionButton control="code" />
            <ActionButton control="codeBlock" />
            <ActionButton control="removeFormatting" />
          </ActionsGroup>
        )}

        {show("heading") && (
          <ActionsGroup editor={editor}>
            <ActionButton control="h1" />
            <ActionButton control="h2" />
            <ActionButton control="h3" />
            <ActionButton control="h4" />
            <ActionButton control="h5" />
            <ActionButton control="h6" />
            <ActionButton control="paragraph" />
          </ActionsGroup>
        )}

        {show("line") && (
          <ActionsGroup editor={editor}>
            <ActionButton control="blockquote" />
            <ActionButton control="hr" />
            <ActionButton control="bulletList" />
            <ActionButton control="orderedList" />
            <ActionButton control="subscript" />
            <ActionButton control="superscript" />
            <ActionButton control="hardbreak" />
          </ActionsGroup>
        )}

        {show("align") && (
          <ActionsGroup editor={editor}>
            <ActionButton control="alignLeft" />
            <ActionButton control="alignCenter" />
            <ActionButton control="alignJustify" />
            <ActionButton control="alignRight" />
          </ActionsGroup>
        )}

        {show("link") && (
          <ActionsGroup editor={editor}>
            <ActionButton control="link" />
            <ActionButton control="unlink" />
          </ActionsGroup>
        )}
      </Row>

      <Row>
        {show("color") && <TiptapColorPicker editor={editor} />}
        <ActionsGroup editor={editor}>
          <ActionButton control="undo" />
          <ActionButton control="redo" />
        </ActionsGroup>
      </Row>
    </div>
  );
};

const Row: React.FC<PropsWithChildren<object>> = ({ children }) => {
  return <div className="flex flex-wrap gap-x-4 gap-y-1">{children}</div>;
};

export default TiptapToolbar;
