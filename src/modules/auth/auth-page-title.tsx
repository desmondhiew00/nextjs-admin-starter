import { cn } from "@/lib/utils";

interface AuthPageTitleProps {
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}
const AuthPageTitle: React.FC<AuthPageTitleProps> = ({ title, subtitle, titleClassName, subtitleClassName }) => {
  return (
    <div className="text-center space-y-2">
      {title && <h1 className={cn("text-2xl font-semibold", titleClassName)}>{title}</h1>}
      {subtitle && <p className={cn("text-sm text-muted-foreground", subtitleClassName)}>{subtitle}</p>}
    </div>
  );
};

export default AuthPageTitle;
