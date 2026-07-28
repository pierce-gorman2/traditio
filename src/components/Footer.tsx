import Image from "next/image";
import Link from "next/link";
import Divider from "./Divider";

const links = [{ href: "/", label: "Home" }, { href: "/podcasts", label: "Podcasts" }];

export default function Footer() {
  return (
    <footer className="border-t border-navy/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center sm:px-10">
        <div className="flex items-center gap-3">
          <Image
            src="/torch-mark.png"
            alt=""
            width={124}
            height={251}
            className="h-7 w-auto"
          />
          <p className="font-serif text-2xl text-navy">Traditio Co.</p>
        </div>
        <p className="text-sm text-charcoal/60">Building for the next thousand years.</p>
        <Divider />
        <nav aria-label="Footer">
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
        <p className="text-xs text-charcoal/40">
          &copy; {new Date().getFullYear()} Traditio Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
