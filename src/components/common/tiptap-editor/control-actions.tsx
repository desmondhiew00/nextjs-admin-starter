import type { ChainedCommands } from "@tiptap/react";
import type { LucideIcon } from "lucide-react";
import {
  AlignLeftIcon,
  BoldIcon,
  BracesIcon,
  CodeIcon,
  CornerDownLeftIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  HighlighterIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  MinusIcon,
  PilcrowIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  SubscriptIcon,
  SuperscriptIcon,
  TextQuoteIcon,
  UnderlineIcon,
  Undo2Icon,
  UnlinkIcon,
} from "lucide-react";

export type Control = keyof typeof ControlActions;
export type Operation = keyof ChainedCommands;

interface ControlAction {
  name: string | object;
  operation: Operation;
  options?: string | boolean | object;
  activeOptions?: string | boolean | object;
  icon: LucideIcon;
  tooltip?: string;
}
export const ControlActions = {
  bold: {
    name: "bold",
    operation: "toggleBold",
    icon: BoldIcon,
    tooltip: "Bold",
  } as ControlAction,
  italic: {
    name: "italic",
    operation: "toggleItalic",
    icon: ItalicIcon,
    tooltip: "Italic",
  } as ControlAction,
  underline: {
    name: "underline",
    operation: "toggleUnderline",
    icon: UnderlineIcon,
    tooltip: "Underline",
  } as ControlAction,
  strike: {
    name: "strike",
    operation: "toggleStrike",
    icon: StrikethroughIcon,
    tooltip: "Strikethrough",
  } as ControlAction,
  highlight: {
    name: "highlight",
    operation: "toggleHighlight",
    icon: HighlighterIcon,
    tooltip: "Highlight",
  } as ControlAction,
  removeFormatting: {
    name: "",
    operation: "unsetAllMarks",
    icon: RemoveFormattingIcon,
    tooltip: "Remove formatting",
  } as ControlAction,
  code: {
    name: "code",
    operation: "toggleCode",
    icon: CodeIcon,
    tooltip: "Code",
  } as ControlAction,
  codeBlock: {
    name: "codeBlock",
    operation: "toggleCodeBlock",
    icon: BracesIcon,
    tooltip: "Code block",
  } as ControlAction,
  h1: {
    name: "heading",
    operation: "setHeading",
    options: { level: 1 },
    icon: Heading1Icon,
    tooltip: "Heading 1",
  } as ControlAction,
  h2: {
    name: "heading",
    operation: "setHeading",
    options: { level: 2 },
    icon: Heading2Icon,
    tooltip: "Heading 2",
  } as ControlAction,
  h3: {
    name: "heading",
    operation: "setHeading",
    options: { level: 3 },
    icon: Heading3Icon,
    tooltip: "Heading 3",
  } as ControlAction,
  h4: {
    name: "heading",
    operation: "setHeading",
    options: { level: 4 },
    icon: Heading4Icon,
    tooltip: "Heading 4",
  } as ControlAction,
  h5: {
    name: "heading",
    operation: "setHeading",
    options: { level: 5 },
    icon: Heading5Icon,
    tooltip: "Heading 5",
  } as ControlAction,
  h6: {
    name: "heading",
    operation: "setHeading",
    options: { level: 6 },
    icon: Heading6Icon,
    tooltip: "Heading 6",
  } as ControlAction,
  paragraph: {
    name: "paragraph",
    operation: "setParagraph",
    icon: PilcrowIcon,
    tooltip: "Paragraph",
  } as ControlAction,
  blockquote: {
    name: "blockquote",
    operation: "toggleBlockquote",
    icon: TextQuoteIcon,
    tooltip: "Blockquote",
  } as ControlAction,
  hr: {
    name: "hr",
    operation: "setHorizontalRule",
    icon: MinusIcon,
    tooltip: "Horizontal rule",
  } as ControlAction,
  bulletList: {
    name: "bulletList",
    operation: "toggleBulletList",
    icon: ListIcon,
    tooltip: "Bullet list",
  } as ControlAction,
  orderedList: {
    name: "orderedList",
    operation: "toggleOrderedList",
    icon: ListOrderedIcon,
    tooltip: "Ordered list",
  } as ControlAction,
  subscript: {
    name: "subscript",
    operation: "toggleSubscript",
    icon: SubscriptIcon,
    tooltip: "Subscript",
  } as ControlAction,
  superscript: {
    name: "superscript",
    operation: "toggleSuperscript",
    icon: SuperscriptIcon,
    tooltip: "Superscript",
  } as ControlAction,
  hardbreak: {
    name: "hardbreak",
    operation: "setHardBreak",
    icon: CornerDownLeftIcon,
    tooltip: "Hard Break",
  } as ControlAction,
  alignLeft: {
    name: { textAlign: "left" },
    operation: "setTextAlign",
    options: "left",
    icon: AlignLeftIcon,
    tooltip: "Align left",
  } as ControlAction,
  alignCenter: {
    name: { textAlign: "center" },
    operation: "setTextAlign",
    options: "center",
    icon: AlignLeftIcon,
    tooltip: "Align center",
  } as ControlAction,
  alignRight: {
    name: { textAlign: "right" },
    operation: "setTextAlign",
    options: "right",
    icon: AlignLeftIcon,
    tooltip: "Align right",
  } as ControlAction,
  alignJustify: {
    name: { textAlign: "justify" },
    operation: "setTextAlign",
    options: "justify",
    icon: AlignLeftIcon,
    tooltip: "Align justify",
  } as ControlAction,
  undo: {
    name: "undo",
    operation: "undo",
    icon: Undo2Icon,
    tooltip: "Undo",
  } as ControlAction,
  redo: {
    name: "redo",
    operation: "redo",
    icon: Redo2Icon,
    tooltip: "Redo",
  } as ControlAction,
  link: {
    name: "link",
    operation: "setLink",
    icon: LinkIcon,
    tooltip: "Link",
  } as ControlAction,
  unlink: {
    name: "link",
    operation: "unsetLink",
    icon: UnlinkIcon,
    tooltip: "Unlink",
  } as ControlAction,
};

export default ControlActions;
