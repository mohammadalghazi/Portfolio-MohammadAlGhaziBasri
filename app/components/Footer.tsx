/*
  Footer
  Simple site footer with nav links and a dynamic copyright year.
  new Date().getFullYear() keeps the year current automatically.
*/

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#beyond", label: "Beyond Code" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-ink-muted">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-ink transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-ink-faint text-sm text-center">
          © {new Date().getFullYear()} Mohammad Al Ghazi Basri. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}