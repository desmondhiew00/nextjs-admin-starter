import { StarHalfIcon, StarIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Progress } from "./progress";
import { Separator } from "./separator";

interface Props {
  className?: string;
  count: number;
  size?: number;
}
export const Rating: React.FC<Props> = ({ count, size, className }) => {
  if (count > 5) count = 5;
  if (count < 0) count = 0;
  count = Math.round(count * 2) / 2;
  return (
    <div className={cn("flex", className)}>
      {Array.from({ length: 5 }).map((_, index) => {
        const half = index + 0.5 === count;
        const mode = half ? "half" : index < count;
        const key = index + 1;
        return <RatingStar key={key} mode={mode} size={size} />;
      })}
    </div>
  );
};

export const RatingStar = ({ mode, size = 18 }: { mode: boolean | "half"; size?: number }) => {
  const baseCss = "text-gray-100 fill-gray-100";
  const isHalf = mode === "half";
  let activeCss = "";
  if (mode !== false) activeCss = "fill-yellow-300 text-yellow-300";
  return (
    <div className="relative">
      <StarIcon className={cn(baseCss, isHalf ? "" : activeCss)} style={{ width: size, height: size }} />
      {mode === "half" && (
        <StarHalfIcon className={cn(baseCss, activeCss, "absolute top-0")} style={{ width: size, height: size }} />
      )}
    </div>
  );
};

interface RatingProgressProps {
  className?: string;
  textClassName?: string;
  label?: string;
  value: number;
}
export const RatingProgress: React.FC<RatingProgressProps> = (props) => {
  const { label, value } = props;
  return (
    <div className="flex items-center gap-2">
      {label && <span className={cn("text-muted-foreground", props.textClassName)}>{label}</span>}
      <Progress className={cn("h-2", props.className)} indicatorClassName="bg-yellow-300 rounded-full" value={value} />
    </div>
  );
};

interface RatingCardProps {
  className?: string;
  rating: number;
  rates: { label: string; value: number }[];
}
export const RatingCard: React.FC<RatingCardProps> = ({ rating, rates, className }) => {
  return (
    <div className={cn("flex rounded-xl px-6 py-5", className)}>
      <div className="m-auto flex flex-col items-center gap-2 text-center">
        <h1 className="text-5xl font-semibold">{rating}</h1>
        <Rating count={rating} />
        <span className="text-sm text-muted-foreground">ratings</span>
      </div>
      <div className="mx-5">
        <Separator className="m-0" orientation="vertical" />
      </div>
      <div className="flex-1">
        {rates.map((rate) => (
          <RatingProgress key={rate.label} label={rate.label} value={rate.value} />
        ))}
      </div>
    </div>
  );
};

export default Rating;
