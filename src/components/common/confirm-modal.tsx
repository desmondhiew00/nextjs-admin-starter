import type { VariantProps } from "class-variance-authority";
import { type PropsWithRef, forwardRef, useImperativeHandle, useRef, useState } from "react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Button, type buttonVariants } from "../ui/button";

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];

export interface ConfirmOptions {
  title?: string;
  description?: string | React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void | Promise<void>;
  confirmVariant?: ButtonVariant;
  cancelVariant?: ButtonVariant;
}

export interface ConfirmModalRef {
  confirm: (options: ConfirmOptions) => void;
}

export const ConfirmModal = forwardRef<ConfirmModalRef, PropsWithRef<unknown>>((_props, ref) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<string | React.ReactNode>("");
  const [confirmText, setConfirmText] = useState("Confirm");
  const [cancelText, setCancelText] = useState("Cancel");
  const [confirmVariant, setConfirmVariant] = useState<ButtonVariant>("default");
  const [cancelVariant, setCancelVariant] = useState<ButtonVariant>("outline");
  const [loading, setLoading] = useState(false);

  const onConfirmRef = useRef<() => void>(null);
  const onCancelRef = useRef<() => void>(null);

  useImperativeHandle(ref, () => ({
    confirm: (options: ConfirmOptions) => {
      if (options.title) setTitle(options.title);
      if (options.description) setDescription(options.description);
      if (options.confirmText) setConfirmText(options.confirmText);
      if (options.cancelText) setCancelText(options.cancelText);
      if (options.confirmVariant) setConfirmVariant(options.confirmVariant);
      if (options.cancelVariant) setCancelVariant(options.cancelVariant);
      if (options.onConfirm) onConfirmRef.current = options.onConfirm;
      if (options.onCancel) onCancelRef.current = options.onCancel;
      setOpen(true);
    },
  }));

  const handleCancel = async () => {
    if (onCancelRef.current) {
      if (onCancelRef.current instanceof Promise) {
        setLoading(true);
        await onCancelRef.current;
        setLoading(false);
      } else {
        onCancelRef.current?.();
      }
    }
    close();
  };

  const handleConfirm = async () => {
    if (onConfirmRef.current) {
      setLoading(true);
      await onConfirmRef.current?.();
      setLoading(false);
    }
    close();
  };

  const close = () => {
    setOpen(false);
    // reset states
    setTimeout(() => {
      setTitle("");
      setDescription("");
      setConfirmText("Confirm");
      setCancelText("Cancel");
      setConfirmVariant("default");
      setCancelVariant("outline");
      setLoading(false);
    }, 200);
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title || "Are you sure?"}</AlertDialogTitle>
          <AlertDialogDescription className="">{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant={cancelVariant} onClick={handleCancel} disabled={loading}>
            {cancelText}
          </Button>
          <Button variant={confirmVariant} onClick={handleConfirm} loading={loading}>
            {confirmText}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
});

ConfirmModal.displayName = "ConfirmModal";

export default ConfirmModal;
