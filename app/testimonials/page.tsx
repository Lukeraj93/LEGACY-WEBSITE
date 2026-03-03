import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | FORGE Performance',
  description: 'Read what FORGE clients say about their coaching and transformation outcomes.'
};

const testimonials = [
  '“I gained 15lb of lean mass while improving energy and focus at work.”',
  '“FORGE gave me structure and accountability without adding stress to my schedule.”',
  '“The best coaching experience I’ve had. Everything is precise, clear, and effective.”'
];

export default function TestimonialsPage() {
  return (
    <section className="section-shell">
      <span className="eyebrow">Testimonials</span>
      <h1 className="text-4xl font-semibold md:text-5xl">Results backed by client experience.</h1>
      <div className="mt-10 space-y-5">
        {testimonials.map((quote) => (
          <blockquote key={quote} className="rounded-xl border border-brand-border bg-brand-muted p-6 text-gray-200">
            {quote}
          </blockquote>
        ))}
      </div>
    </section>
  );
}
