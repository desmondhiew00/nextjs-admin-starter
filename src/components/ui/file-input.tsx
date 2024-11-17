import "cropperjs/dist/cropper.css";

import { FileIcon, UploadIcon, XCircleIcon } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "./button";
import { Input } from "./input";

export interface FileUploadInputProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  placeholder?: string;
  accept?: string;
  onChange?: (file?: File) => void;
  disabled?: boolean;
}

export const FileInput: React.FC<FileUploadInputProps> = (props) => {
  const { placeholder, accept } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const filename = file?.name;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFile(file);
    props.onChange?.(file || undefined);
  };

  const onClear = () => {
    setFile(null);
    if (fileInputRef.current?.value) {
      fileInputRef.current.value = "";
    }
    props.onChange?.(undefined);
  };

  const Icon = filename ? FileIcon : UploadIcon;
  return (
    <div>
      <Input
        {...props.inputProps}
        ref={fileInputRef}
        className="hidden"
        type="file"
        accept={accept}
        onChange={handleFileChange}
      />
      <div className="flex items-center">
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
          {filename ? filename : placeholder || "Select File"}
        </Button>
        {filename ? (
          <Button className="ml-[2px]" variant="ghost" size="icon-sm" onClick={onClear}>
            <XCircleIcon className="h-3.5 w-3.5 text-red-500" />
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default FileInput;
