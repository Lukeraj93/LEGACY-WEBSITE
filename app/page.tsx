import Link from 'next/link';

const coachingHighlights = [
  {
    title: 'High-Touch Coaching',
    description: 'Direct accountability, weekly adjustments, and expert strategy tailored around your schedule.'
  },
  {
    title: 'Evidence-Based Programming',
    description: 'Training and nutrition systems engineered to improve strength, body composition, and performance.'
  },
  {
    title: 'Sustainable Results',
    description: 'Build habits and routines that scale with your life, not against it.'
  }
];

export default function HomePage() {
  return (
    <>
      <section className="section-shell">
        <span className="eyebrow">Premium Coaching</span>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
          Build a stronger body and sharper discipline with elite coaching.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
          FORGE helps driven professionals transform performance through precision training, nutrition guidance,
          and accountability that delivers real outcomes.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-brand-accent px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Book a Consult
          </Link>
          <Link
            href="/pricing"
            className="rounded-md border border-brand-border px-6 py-3 text-sm font-medium text-white transition hover:border-brand-accent"
          >
            View Pricing
          </Link>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          {coachingHighlights.map((item) => (
            <article key={item.title} className="rounded-xl border border-brand-border bg-brand-muted p-6">
              <h2 className="text-lg font-medium text-white">{item.title}</h2>
              <p className="mt-3 text-sm text-gray-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
