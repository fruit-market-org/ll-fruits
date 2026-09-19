import Icon from "./Icon";
import WhatsAppButton from "./WhatsAppButton";
import { CONTACT, WHATSAPP } from "@/lib/constants";

type Props = {
  title?: string;
  description?: string;
};

export default function CTABand({
  title = "Need fruit on your counter tomorrow?",
  description = "Send us a message on WhatsApp with the fruit, grade and quantity you need. We reply with today's availability and rate.",
}: Props) {
  return (
    <section className="container-page">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-ink px-6 py-14 text-center sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(28rem 16rem at 12% 0%, #E8821E 0%, transparent 65%), radial-gradient(28rem 18rem at 88% 100%, #B8394A 0%, transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-cream sm:text-[2.4rem]">
            {title}
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-cream/70">{description}</p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton
              size="lg"
              label={`WhatsApp ${WHATSAPP.primary.display}`}
              className="w-full sm:w-auto"
            />
            <a
              href={`tel:${CONTACT.mobiles[0].tel}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-[0.95rem] font-semibold text-cream transition-colors hover:border-saffron-500 hover:text-saffron-500 sm:w-auto"
            >
              <Icon name="phone" size={18} />
              Call {CONTACT.mobiles[0].display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
