"use client";

import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import SubScript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { forwardRef, useImperativeHandle } from "react";

import { cn } from "@/lib/utils";

import TiptapToolbar from "./tiptap-toolbar";

interface TiptapEditorProps {
  className?: string;
  editorClassName?: string;
  value?: string;
  disabled?: boolean;
}
export interface TiptapEditorRef {
  getHtml: () => string;
}
export const TiptapEditor = forwardRef<TiptapEditorRef, TiptapEditorProps>((props, ref) => {
  const { value } = props;

  useImperativeHandle(ref, () => ({
    getHtml: () => editor?.getHTML() || "",
  }));

  const editorCss = cn("border rounded-b-md p-3 overflow-auto", props.editorClassName);
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: editorCss,
      },
    },
    extensions,
    content: value,
  });

  return (
    <div className={cn(props.className)}>
      <TiptapToolbar className={props.disabled ? "pointer-events-none opacity-50" : ""} editor={editor} />
      <EditorContent
        className={cn("no-more-tailwind", props.disabled ? "pointer-events-none opacity-50" : "")}
        editor={editor}
      />
    </div>
  );
});
TiptapEditor.displayName = "TiptapEditor";

const extensions = [
  StarterKit.configure(),
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  Highlight,
  Link,
  SubScript,
  Superscript,
  TextAlign.configure({ types: ["heading", "paragraph"] }),
  TextStyle,
  Underline,
];

export default TiptapEditor;
