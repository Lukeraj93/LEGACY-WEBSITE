import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  return (
    <header className="border-b border-brand-border bg-brand-bg/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-10">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-text">
          FORGE
        </Link>
        <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-300 md:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-brand-accent">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
