import { Icon, type IconName } from "./icon";

type Props = {
  name: IconName;
  color?: string;
  className?: string;
};

export function TileIcon({ name, color = "#6c5ce7", className = "" }: Props) {
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-tile text-white ${className}`}
      style={{ backgroundColor: color }}
    >
      <Icon name={name} className="h-5 w-5" />
    </span>
  );
}
