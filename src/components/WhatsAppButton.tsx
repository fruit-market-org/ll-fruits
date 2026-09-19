import Icon from "./Icon";
import { WHATSAPP } from "@/lib/constants";

export function whatsappHref(number: string, message: string = WHATSAPP.defaultMessage) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

type Props = {
  number?: string;
  message?: string;
  label?: string;
  variant?: "solid" | "outline" | "light";
  size?: "md" | "lg";
  className?: string;
};

const VARIANTS = {
  solid:
    "bg-leaf-500 text-white shadow-sm shadow-leaf-500/25 hover:bg-leaf-600 hover:shadow-md hover:shadow-leaf-500/25",
  outline:
    "border border-leaf-500/35 bg-white text-leaf-600 hover:border-leaf-500 hover:bg-leaf-50",
  light: "bg-white text-leaf-600 shadow-sm hover:bg-cream",
} as const;

const SIZES = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-[0.95rem]",
} as const;

export default function WhatsAppButton({
  number = WHATSAPP.primary.number,
  message,
  label = "WhatsApp Us",
  variant = "solid",
  size = "md",
  className = "",
}: Props) {
  return (
    <a
      href={whatsappHref(number, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      <Icon name="whatsapp" size={size === "lg" ? 20 : 18} />
      {label}
    </a>
  );
}
