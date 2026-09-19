import Icon from "./Icon";
import { WHATSAPP } from "@/lib/constants";
import { whatsappHref } from "./WhatsAppButton";

/** Persistent WhatsApp affordance pinned to the bottom-right of every page. */
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref(WHATSAPP.primary.number)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp us on ${WHATSAPP.primary.display}`}
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-leaf-500 py-3.5 pl-4 pr-4 text-white shadow-lg shadow-leaf-500/30 transition-all duration-200 hover:bg-leaf-600 hover:shadow-xl sm:pr-5"
    >
      <Icon name="whatsapp" size={24} className="shrink-0" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp Us</span>
    </a>
  );
}
