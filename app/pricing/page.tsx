import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | FORGE Performance',
  description: 'Review premium coaching tiers and choose your path with FORGE Performance.'
};

const tiers = [
  { name: 'Foundation', price: '$249/mo', details: 'Program design, monthly check-ins, and habit tracking.' },
  {
    name: 'Performance',
    price: '$449/mo',
    details: 'Weekly coaching calls, nutrition oversight, and direct support between sessions.'
  },
  {
    name: 'Executive',
    price: '$749/mo',
    details: 'High-touch 1-1 strategy, priority messaging, and complete lifestyle performance planning.'
  }
];

export default function PricingPage() {
  return (
    <section className="section-shell">
      <span className="eyebrow">Pricing</span>
      <h1 className="text-4xl font-semibold md:text-5xl">Premium tiers for serious outcomes.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map((tier, index) => (
          <article
            key={tier.name}
            className={`rounded-xl border p-7 ${
              index === 1 ? 'border-brand-accent bg-brand-muted' : 'border-brand-border bg-brand-muted'
            }`}
          >
            <h2 className="text-xl font-medium">{tier.name}</h2>
            <p className="mt-4 text-3xl font-semibold text-brand-accent">{tier.price}</p>
            <p className="mt-4 text-sm text-gray-300">{tier.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
