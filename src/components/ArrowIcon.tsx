import Image from "next/image";

type ArrowIconProps = {
  direction: "back" | "forward";
  size?: number;
  className?: string;
};

export default function ArrowIcon({
  direction,
  size = 20,
  className = "",
}: ArrowIconProps) {
  const src =
    direction === "back"
      ? "/assets/arrow-back.png"
      : "/assets/arrow-forward.png";

  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={`object-contain select-none brightness-0 saturate-100 ${className}`.trim()}
    />
  );
}
