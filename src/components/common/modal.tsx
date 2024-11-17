import { type PropsWithChildren, forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";

interface Props {
  title?: string;
  className?: string;
  footer?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  onOK?: () => void;
  onCancel?: () => void;
}

export interface ModalHandler {
  open: () => void;
  close: () => void;
  setLoading: (loading: boolean) => void;
  setTitle: (title: string) => void;
}

export const Modal = forwardRef<ModalHandler, PropsWithChildren<Props>>((props, ref) => {
  const { cancelText = "Cancel", okText = "Submit" } = props;

  const [title, setTitle] = useState(props.title || "");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false),
    setTitle,
    setLoading,
  }));

  const handleCancel = async () => {
    if (props.onCancel) props.onCancel();
    setOpen(false);
  };

  const handleOk = async () => {
    if (props.onOK) props.onOK();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className={props.className}>
        {title && (
          <DialogHeader>
            <DialogTitle className="line-clamp-1">{title}</DialogTitle>
          </DialogHeader>
        )}

        {props.children}

        <DialogFooter>
          {props.footer || (
            <>
              <Button variant="outline" onClick={handleCancel} disabled={loading}>
                {cancelText}
              </Button>
              <Button onClick={handleOk} loading={loading}>
                {okText}
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

export const useModal = () => {
  const ref = useRef<ModalHandler>(null);

  const open = () => ref.current?.open();
  const close = () => {
    ref.current?.setLoading(false);
    ref.current?.close();
  };
  const setTitle = (title: string) => ref.current?.setTitle(title);
  const setLoading = (loading: boolean) => ref.current?.setLoading(loading);

  return { open, close, setTitle, setLoading, ref };
};
