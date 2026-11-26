import { Hand, HandHeart, Handshake } from "lucide-react";

type FeatureIconProps = {
  index: number;
};

export default function FeatureIcon({ index }: FeatureIconProps) {
  const iconProps = {
    size: 64,
    strokeWidth: 1.6,
    className: "feature-icon",
    "aria-hidden": true as const,
  };

  if (index === 0) return <Hand {...iconProps} />;
  if (index === 1) return <HandHeart {...iconProps} />;
  return <Handshake {...iconProps} />;
}