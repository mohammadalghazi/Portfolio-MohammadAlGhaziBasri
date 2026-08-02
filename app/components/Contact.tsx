import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";


const CHANNELS = [
  {
    label: "Email",
    value: "alghazismkn26@gmail.com",
    href: "mailto:alghazismkn26@gmail.com",
    icon: "mail",
  },
  {
    label: "WhatsApp",
    value: "+62 812-9183-3401",
    href: "https://wa.me/6281291833401",
    icon: "whatsapp",
  },
  {
    label: "LinkedIn",
    value: "/in/alghazibasri",
    href: "https://www.linkedin.com/in/alghazibasri/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "/mohammadalghazi",
    href: "https://github.com/mohammadalghazi",
    icon: "github",
  },
  {
    label: "Instagram",
    value: "@mo_alghazi",
    href: "https://instagram.com/mo_alghazi",
    icon: "instagram",
  },
];

function ChannelIcon({ name }: { name: string }) {
  const size = { width: 22, height: 22, viewBox: "0 0 24 24" };
  switch (name) {
    case "mail":
      return (
        <svg {...size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...size} fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.24 8.24-1.52 0-3-.42-4.3-1.2l-.31-.19-3.12.82.83-3.04-.2-.32a8.16 8.16 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24Zm-2.61 4.4c-.13 0-.34.05-.52.25-.18.2-.69.68-.69 1.65 0 .97.71 1.91.81 2.04.1.13 1.39 2.24 3.44 3.05 1.7.67 2.05.54 2.42.5.37-.03 1.19-.48 1.36-.95.17-.47.17-.87.12-.95-.05-.08-.18-.13-.38-.23-.2-.1-1.19-.59-1.37-.65-.18-.07-.32-.1-.45.1-.13.2-.51.65-.63.78-.12.13-.23.15-.43.05-.2-.1-.85-.31-1.61-1-.6-.53-1-1.19-1.12-1.39-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.34.07-.13.03-.25-.02-.35-.05-.1-.44-1.08-.62-1.48-.16-.38-.33-.33-.45-.34l-.38-.01Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...size} fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C21.4 8.65 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2.01 0-2.32 1.57-2.32 3.2V21h-4z" />
        </svg>
      );
    case "github":
      return (
        <svg {...size} fill="currentColor">
          <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.85 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.79.62-3.38-1.37-3.38-1.37-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
      <SectionHeading eyebrow="Get in Touch" title="Contact Me" />

      <Reveal>
        <p className="text-center text-ink-muted max-w-lg mx-auto mb-10">
          Open to full-time roles and freelance projects. The fastest way to
          reach me is email or WhatsApp — I usually reply within a day.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {CHANNELS.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.05}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-4 bg-surface border border-border rounded-2xl p-4 hover:border-accent hover:bg-surface-2 transition-colors group"
            >
              <span className="w-11 h-11 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-black transition-colors">
                <ChannelIcon name={c.icon} />
              </span>
              <span className="min-w-0">
                <span className="block font-medium text-sm">{c.label}</span>
                <span className="block text-ink-muted text-sm truncate">
                  {c.value}
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}