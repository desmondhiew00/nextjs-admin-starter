import { Label } from "../ui/label";

interface Props {
  label?: string;
  value?: string;
}
export const FormItemPreview: React.FC<Props> = ({ label, value }) => {
  if (!label && !value) return null;
  return (
    <div>
      {label ? <Label>{label}</Label> : null}
      <p className="text-sm text-muted-foreground">{value || "-"}</p>
    </div>
  );
};
