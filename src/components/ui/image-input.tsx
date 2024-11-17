import "cropperjs/dist/cropper.css";

import { ArrowBigRightDashIcon, FileImageIcon, PlusIcon, UploadIcon, XIcon } from "lucide-react";
import { type MouseEvent, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import Cropper, { type ReactCropperElement } from "react-cropper";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

import { Button } from "./button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog";
import { Input } from "./input";
import { Spinner } from "./spinner";

type ImageSize = { width: number; height: number };
type FileData = { file: File; dataUrl?: string };
type CropperConfig = {
  title?: string;
  description?: string;
  aspectRatio?: number;
};

export interface ImageUploadInput {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  accept?: string;
  multiple?: boolean;
  onChange?: (file?: File | File[]) => void;
  disabled?: boolean;
  imageUrl?: string;
  cropper?: boolean | CropperConfig;
  size?: ImageSize;
  btnLabel?: string;
  maxFileSize?: number; // in MB
  mode?: "button" | "avatar";
  imageClassName?: string;
}

export const ImageInput: React.FC<ImageUploadInput> = (props) => {
  const { accept = "image/*", maxFileSize = 3, mode = "button" } = props;
  const { size = { width: 100, height: 100 } } = props;
  const showCropper = !!props.cropper;
  const isAvatar = mode === "avatar";
  let multiple = props.multiple;
  if (isAvatar && multiple === true) multiple = false;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cropperRef = useRef<CropperDialogRef>(null);

  const [files, setFiles] = useState<FileData[]>([]);
  const filename = files.map((data) => data.file.name).join(", ");

  useEffect(() => {
    if (props.imageUrl) setFiles([]);
  }, [props.imageUrl]);

  const updateFilesState = (files: FileData[]) => {
    props.onChange?.(multiple ? files.map((file) => file.file) : files[0]?.file);
    setFiles(files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = [];
    const length = multiple ? e.target.files.length : 1;
    for (let i = 0; i < length; i++) {
      const file = e.target.files[i];
      if (file) {
        const validFileSize = file.size <= maxFileSize * 1024 * 1024;

        if (validFileSize) {
          const dataUrl = URL.createObjectURL(file);
          if (!showCropper || length > 1) newFiles.push({ file, dataUrl });
          if (showCropper && length === 1) {
            cropperRef.current?.open(file);
          }
        } else {
          toast.error(`File size should be less than ${maxFileSize}MB`, {
            description: file.name,
          });
        }
      }
    }
    updateFilesState(multiple ? [...files, ...newFiles] : newFiles);
    e.target.value = "";
  };

  const onRemoveFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    updateFilesState(newFiles);
  };

  const Icon = multiple ? PlusIcon : filename ? FileImageIcon : UploadIcon;
  const btnLabel = props.btnLabel ? props.btnLabel : multiple ? "Add Images" : filename || "Select Image";
  const ButtonComponent = (
    <Button
      className="text-xs "
      variant="outline"
      onClick={(e) => {
        e.preventDefault();
        fileInputRef.current?.click();
      }}
      disabled={props.disabled}
    >
      <Icon className="mr-2 h-3.5 w-3.5" />
      {btnLabel}
    </Button>
  );
  return (
    <div>
      <Input
        {...props.inputProps}
        ref={fileInputRef}
        className="hidden"
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
      />

      {mode === "button" ? ButtonComponent : !props.imageUrl && files.length === 0 ? ButtonComponent : null}

      <div
        className={cn("mt-2 flex items-center gap-3", isAvatar ? "w-fit cursor-pointer hover:opacity-75" : "")}
        onClick={() => {
          if (isAvatar) fileInputRef.current?.click();
        }}
      >
        {!multiple ? (
          <ImagePreview imageClassName={props.imageClassName} url={props.imageUrl} size={size} filename="" />
        ) : null}
        {props.imageUrl && files.length > 0 && !multiple ? (
          <ArrowBigRightDashIcon className="h-5 w-5 text-muted-foreground" />
        ) : null}
        {files.map((file, index) => (
          <ImagePreview
            imageClassName={props.imageClassName}
            key={file.file.name}
            url={file.dataUrl}
            size={size}
            filename={file.file.name || ""}
            onRemove={() => onRemoveFile(index)}
          />
        ))}
      </div>

      {showCropper ? (
        <CropperDialog
          ref={cropperRef}
          config={typeof props.cropper === "object" ? props.cropper : undefined}
          onCropSuccess={(fileData) => {
            updateFilesState(multiple ? [...files, fileData] : [fileData]);
          }}
        />
      ) : null}
    </div>
  );
};

interface ImagePreviewProps {
  filename?: string;
  url?: string;
  size: ImageSize;
  imageClassName?: string;
  onRemove?: () => void;
}
const ImagePreview: React.FC<ImagePreviewProps> = ({ url, filename, size, onRemove, imageClassName }) => {
  if (!url) return null;
  return (
    <div className="relative">
      <img
        src={url}
        alt="image-input"
        className={cn("flex-1 rounded-md object-cover", imageClassName)}
        width={size.width}
        height={size.height}
      />

      {filename ? (
        <p className="truncate text-center text-xs text-muted-foreground" style={{ maxWidth: size.width }}>
          {filename}
        </p>
      ) : null}
      {onRemove ? (
        <Button
          className="group absolute -right-1 -top-1 ml-[2px] h-fit w-fit rounded-full bg-destructive/60 hover:bg-destructive/100"
          variant="link"
          size="icon-sm"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onRemove();
          }}
        >
          {/* <XCircleIcon className="h-4 w-4 text-red-500 group-hover:hidden" /> */}
          <XIcon className="h-3.5 w-3.5 p-[2px] text-white" />
        </Button>
      ) : null}
    </div>
  );
};

interface CropperDialogProps {
  onCropSuccess?: (fileData: FileData) => void;
  config?: CropperConfig;
}
interface CropperDialogRef {
  open: (file?: File) => void;
  close: () => void;
  setSrcFile: (file: File) => void;
}
const CropperDialog = forwardRef<CropperDialogRef, CropperDialogProps>((props, ref) => {
  const cropperRef = useRef<ReactCropperElement>(null);
  const [open, setOpen] = useState(false);
  const [srcFile, setSrcFile] = useState<File | null>(null);
  const [cropping, setCropping] = useState(false);

  const { config = {} } = props;
  const title = config.title || "Crop Image";
  const description = config.description || "Crop image to fit the required aspect ratio.";
  const aspectRatio = config.aspectRatio || undefined;

  useImperativeHandle(ref, () => ({
    open: (file?: File) => {
      if (file) setSrcFile(file);
      setOpen(true);
    },
    close: () => setOpen(false),
    setSrcFile,
  }));

  const onCrop = (e: MouseEvent<HTMLButtonElement>) => {
    if (!srcFile) return;
    e.preventDefault();
    setCropping(true);

    const cropper = cropperRef.current?.cropper;
    const croppedCanvas = cropper?.getCroppedCanvas();
    if (!croppedCanvas) return;

    const dataUrl = croppedCanvas.toDataURL();
    croppedCanvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], srcFile.name, { type: "image/*" });
        props.onCropSuccess?.({ file, dataUrl });
      }
      setOpen(false);
      setCropping(false);
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Spinner loading={cropping}>
          <div className="grid items-center justify-center">
            {srcFile && (
              <Cropper
                ref={cropperRef}
                src={URL.createObjectURL(srcFile)}
                style={{ height: 400, width: "100%" }}
                aspectRatio={aspectRatio}
              />
            )}
          </div>
        </Spinner>
        <DialogFooter>
          <Button onClick={onCrop} loading={cropping}>
            Crop
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
CropperDialog.displayName = "CropperDialog";

export default ImageInput;
