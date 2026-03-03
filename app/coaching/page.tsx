import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coaching | FORGE Performance',
  description: 'Explore 1-1 coaching, hybrid coaching, and personalized program design at FORGE.'
};

const offerings = [
  {
    title: '1-1 Coaching',
    copy: 'Weekly check-ins, direct messaging support, personalized training and nutrition protocols, and high accountability.'
  },
  {
    title: 'Hybrid Coaching',
    copy: 'A blend of in-person sessions and remote support, ideal for clients who need flexibility without sacrificing quality.'
  },
  {
    title: 'Program Design',
    copy: 'Structured training blocks focused on strength, physique, and athletic performance with clear progression.'
  }
];

export default function CoachingPage() {
  return (
    <section className="section-shell">
      <span className="eyebrow">Coaching</span>
      <h1 className="text-4xl font-semibold md:text-5xl">Select the coaching format that fits your lifestyle.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {offerings.map((offering) => (
          <article key={offering.title} className="rounded-xl border border-brand-border bg-brand-muted p-7">
            <h2 className="text-xl font-medium text-white">{offering.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">{offering.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
