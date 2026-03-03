import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | FORGE Performance',
  description: 'Learn about FORGE and our premium, outcome-focused approach to performance coaching.'
};

export default function AboutPage() {
  return (
    <section className="section-shell">
      <span className="eyebrow">About</span>
      <h1 className="text-4xl font-semibold md:text-5xl">Coaching built for standards, not shortcuts.</h1>
      <p className="mt-6 max-w-3xl text-gray-300 md:text-lg">
        FORGE was built for people who want a high-performance body to match high-performance careers. We blend
        structured training, practical nutrition, and consistent accountability so progress is measurable and
        sustainable.
      </p>
    </section>
  );
}
