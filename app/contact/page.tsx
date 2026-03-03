import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | FORGE Performance',
  description: 'Get in touch with FORGE to book a coaching consult.'
};

export default function ContactPage() {
  return (
    <section className="section-shell">
      <span className="eyebrow">Contact</span>
      <h1 className="text-4xl font-semibold md:text-5xl">Book your coaching consult.</h1>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form className="space-y-5 rounded-xl border border-brand-border bg-brand-muted p-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full rounded-md border border-brand-border bg-black px-4 py-3 text-white focus:border-brand-accent focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md border border-brand-border bg-black px-4 py-3 text-white focus:border-brand-accent focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded-md border border-brand-border bg-black px-4 py-3 text-white focus:border-brand-accent focus:outline-none"
              placeholder="Tell us your goals"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-md bg-brand-accent px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Send Inquiry
          </button>
        </form>

        <div className="rounded-xl border border-brand-border bg-brand-muted p-6">
          <h2 className="text-2xl font-medium">Prefer WhatsApp?</h2>
          <p className="mt-4 text-gray-300">
            Message us directly for faster response times and immediate consultation availability.
          </p>
          <a
            href="https://wa.me/1234567890"
            className="mt-8 inline-flex rounded-md bg-brand-accent px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
