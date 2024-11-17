import type { Editor } from "@tiptap/react";
import { Children, type PropsWithChildren, cloneElement, useCallback } from "react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { type Control, ControlActions } from "./control-actions";

interface ActionButtonProps {
  group?: ButtonProps["group"];
  className?: string;
  iconClassName?: string;
  editor?: Editor | null;
  control: Control;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ editor, control, group, className, iconClassName }) => {
  const { name, operation, options, tooltip = "", icon: Icon } = ControlActions[control];
  const active = name ? editor?.isActive(name as string, options) : false;

  const setLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;
  return (
    <Button
      group={group}
      tooltip={tooltip}
      className={className}
      onClick={() => {
        if (operation === "setLink") {
          setLink();
        } else {
          // @ts-expect-error
          editor.chain().focus()[operation](options).run();
        }
      }}
      // @ts-expect-error
      disabled={!editor.can().chain().focus()[operation](options).run()}
      active={active}
    >
      {<Icon className={cn("h-3.5 w-3.5", iconClassName, active ? "stroke-[3px]" : "")} />}
    </Button>
  );
};

interface ControlsGroupProps {
  editor: Editor | null;
  children: React.ReactNode;
}
export const ActionsGroup: React.FC<ControlsGroupProps> = ({ editor, children }) => {
  return (
    <div className="flex">
      {Children.map(children, (child, index) => {
        return cloneElement(child as React.ReactElement, {
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          ...(child as React.ReactElement<any>).props,
          editor,
          group: index === 0 ? "start" : index === Children.count(children) - 1 ? "end" : "center",
        });
      })}
    </div>
  );
};

interface ButtonProps {
  group?: "start" | "center" | "end";
  className?: string;
  disabled?: boolean;
  active?: boolean;
  tooltip?: string;
  onClick: () => void;
}
export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  disabled,
  active,
  children,
  className,
  tooltip,
  group,
}) => {
  const baseCss = "w-7 h-7 hover:bg-muted flex justify-center items-center";
  const activeCss = "bg-muted shadow-inner hover:opacity-70";
  let borderCss = "";
  if (group === "start") {
    borderCss = "border rounded-tl-md rounded-bl-md";
  } else if (group === "center") {
    borderCss = "border-r border-t border-b";
  } else if (group === "end") {
    borderCss = "border-r border-t border-b rounded-tr-md rounded-br-md";
  } else {
    borderCss = "border rounded-md";
  }

  if (!tooltip) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={cn(baseCss, active ? activeCss : "", borderCss, className)}
      >
        {children}
      </button>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={cn(baseCss, active ? activeCss : "", borderCss, className)}
          >
            {children}
          </button>
        </TooltipTrigger>
        <TooltipContent>{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
