import { Badge, type BadgeVariants } from "./badge";

interface HeadingProps {
  className?: string;
  title?: string;
  description?: string | React.ReactNode;
  module?: string;
  type?: "create" | "edit" | "list";
  count?: number;
  badge?:
    | string
    | {
        variant?: BadgeVariants;
        text: string;
      };
}

export const Heading: React.FC<HeadingProps> = ({ module, type, count, badge, ...props }) => {
  let title = props.title || "";
  let description = props.description || "";

  if (module) {
    if (type === "create") {
      title = `Create ${module}`;
      description = `Create a new ${module.toLowerCase()}`;
    } else if (type === "edit") {
      title = `Edit ${module}`;
      description = `View and edit the ${module.toLowerCase()} information.`;
    } else if (type === "list") {
      title = `${module}`;
      if (count !== undefined) title += ` (${count || 0})`;
      description = `Manage ${module.toLowerCase()}`;
    }
  }
  return (
    <div className={props.className}>
      <h2 className="text-3xl font-bold tracking-tight">
        {title}

        {badge && (
          <Badge
            className="relative -top-1 ml-2"
            variant={typeof badge === "string" ? "default" : badge.variant || "default"}
          >
            {typeof badge === "string" ? badge : badge.text}
          </Badge>
        )}
      </h2>

      <div className="mt-1 text-sm text-muted-foreground">{description}</div>
    </div>
  );
};
