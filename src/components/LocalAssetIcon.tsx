import Image from "next/image";

type LocalAssetIconProps = {
  src: string;
  size?: number;
  className?: string;
};

export default function LocalAssetIcon({
  src,
  size = 20,
  className = "",
}: LocalAssetIconProps) {
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
