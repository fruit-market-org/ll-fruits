import type { SVGProps } from "react";

export type IconName =
  | "handshake"
  | "truck"
  | "scale"
  | "leaf"
  | "box"
  | "clock"
  | "phone"
  | "mail"
  | "pin"
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "arrow"
  | "check"
  | "menu"
  | "close";

const PATHS: Record<IconName, React.ReactNode> = {
  handshake: (
    <>
      <path d="M11 6 8.5 8.5a2 2 0 0 0 0 2.8 2 2 0 0 0 2.8 0L13 9.6l4.2 4.2" />
      <path d="M13 9.6h3.2L21 14.4" />
      <path d="M3 14.4 7.8 9.6H11" />
      <path d="m13.2 13.4 2.4 2.4M10.8 15.2l2.4 2.4M8.6 17.2 10 18.6" />
    </>
  ),
  truck: (
    <>
      <path d="M2 7.5h11v9H2z" />
      <path d="M13 10.5h4.2L21 13.6v2.9h-8z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M7 20h10" />
      <path d="M5 8h14" />
      <path d="M5 8 2.5 14h5zM19 8l-2.5 6h5z" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-8 5-13 16-14 1 11-4 16-11 16a6 6 0 0 1-5-2Z" />
      <path d="M4 20c4-5 8-8 13-10" />
    </>
  ),
  box: (
    <>
      <path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9z" />
      <path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </>
  ),
  phone: (
    <path d="M6.2 3.5h3l1.4 3.6-1.9 1.5a12 12 0 0 0 5.7 5.7l1.5-1.9 3.6 1.4v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  whatsapp: (
    <path d="M12 2.8a9.1 9.1 0 0 0-7.8 13.8L3 21.5l5.1-1.3A9.1 9.1 0 1 0 12 2.8Zm5.2 12.9c-.2.6-1.2 1.2-1.7 1.2s-1.2.3-3.9-.9a9.6 9.6 0 0 1-4-4c-1.2-2.1-.6-3.2-.2-3.7l.6-.6c.2-.2.6-.2.9-.2s.4 0 .6.4l.8 1.8c0 .2 0 .4-.2.6l-.5.6c-.2.2-.3.4-.1.7a8 8 0 0 0 3.7 3.2c.3.1.5 0 .7-.2l.7-.8c.2-.2.4-.3.6-.2l1.8.9c.3.1.3.5.2.8Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14.5 8.5h2.3V5.2h-2.6c-2.5 0-4 1.6-4 4.2v1.9H8v3.3h2.2V21h3.4v-6.4h2.4l.5-3.3h-2.9V9.7c0-.8.3-1.2.9-1.2Z" />
  ),
  arrow: <path d="M4 12h15m-5.5-5.5L19 12l-5.5 5.5" />,
  check: <path d="m4.5 12.5 4.5 4.5 10.5-11" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  /** Solid icons are filled with currentColor instead of stroked. */
  size?: number;
};

const SOLID: IconName[] = ["whatsapp", "facebook", "phone"];

export default function Icon({ name, size = 24, ...props }: IconProps) {
  const solid = SOLID.includes(name);
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={solid ? "currentColor" : "none"}
      stroke={solid ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}
