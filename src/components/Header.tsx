import Link from "next/link";

const links = [{ href: "/", label: "Home" }, { href: "/podcasts", label: "Podcasts" }];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
        <Link
          href="/"
          className="font-serif text-lg tracking-wide text-navy"
        >
          Traditio Co.
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs font-medium tracking-[0.15em] text-charcoal/70 uppercase transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
