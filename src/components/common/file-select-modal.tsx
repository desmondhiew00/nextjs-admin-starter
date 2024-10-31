import { UploadIcon, XIcon } from "lucide-react";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { type Accept, useDropzone } from "react-dropzone";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Spinner } from "../ui/spinner";

export interface FileSelectModalRef {
  open: () => void;
  close: () => void;
}

interface Props {
  title?: string;
  onUpload?: (files: File[]) => Promise<void> | void;
  // in bytes
  maxSize?: number;
  accept?: Accept;
}

const mb = (size: number) => size * 1024 * 1024;

export const FileSelectModal = forwardRef((props: Props, ref: React.Ref<FileSelectModalRef>) => {
  const {
    maxSize = mb(3),
    accept = { "image/jpeg": [], "image/png": [], "image/webp": [], "image/heic": [], "image/jfif": [] },
  } = props;
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles([...files, ...acceptedFiles]);
    },
    [files],
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxSize, accept });

  useImperativeHandle(
    ref,
    () => ({
      open: () => triggerOpen(true),
      close: () => triggerOpen(false),
    }),
    [],
  );

  const removeFile = (file: File) => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  const removeAllFiles = () => {
    setFiles([]);
  };

  const onUpload = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await props.onUpload?.(files);
      triggerOpen(false);
    } catch (_e) {}
    setLoading(false);
  };

  const triggerOpen = (val: boolean) => {
    if (loading) return;
    if (val) {
      setOpen(val);
    } else {
      setOpen(val);
      setTimeout(() => {
        removeAllFiles();
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={triggerOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{props.title || "Upload Files"}</DialogTitle>
        </DialogHeader>

        <Spinner loading={loading}>
          <div
            {...getRootProps({ className: "dropzone" })}
            className="flex h-[200px] cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-[3px] border-dashed bg-muted p-3 hover:bg-muted-foreground/10"
          >
            <input {...getInputProps()} />
            <UploadIcon />
            <div>
              <div className="text-sm">Click or Drag files to this area to upload</div>
              <p className="text-center text-sm text-muted-foreground/80">
                Accept file types: {accept.type?.join(", ")}
                <br />
                Max file size: {maxSize / 1024 / 1024} MB
              </p>
            </div>
          </div>

          <ScrollArea className="mt-3 max-h-[300px]">
            <div className="relative w-[462px] space-y-2">
              {files.map((file) => (
                <FileItem key={file.name} file={file} onRemove={removeFile(file)} />
              ))}
            </div>
          </ScrollArea>
        </Spinner>

        <DialogFooter>
          <Button variant="outline" onClick={() => triggerOpen(false)} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={onUpload} loading={loading}>
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

FileSelectModal.displayName = "FileSelectModal";

interface FileItemProps {
  className?: string;
  file: File;
  onRemove: () => void;
}
const FileItem: React.FC<FileItemProps> = ({ file, onRemove }) => {
  return (
    <div className="flex w-full items-center justify-between rounded bg-muted/45 pl-3">
      <div className="flex-1 truncate text-sm">{file.name + file.name + file.name + file.name}</div>
      <Button className="" variant="link" size="icon" onClick={onRemove}>
        <XIcon className="h-4 w-4 text-destructive" />
      </Button>
    </div>
  );
};

export default FileSelectModal;
