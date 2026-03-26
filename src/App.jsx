import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    height: '',
    weight: '',
    dob: '',
    goal: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_klbtn91',
        'template_8h5urrk',
        formData,
        'h4w899PtypElg_JOw'
      );

      alert('Inquiry submitted! I will contact you soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        height: '',
        weight: '',
        dob: '',
        goal: '',
        notes: '',
      });
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Try again.');
    }
  };

  const services = [
    {
      title: '1-on-1 Personal Training',
      description: 'Customized workouts, form coaching, and accountability built around your goals.',
    },
    {
      title: 'Weight Loss Coaching',
      description: 'Simple training and nutrition habits designed to help you lose fat and stay consistent.',
    },
    {
      title: 'Strength & Muscle Building',
      description: 'Structured programming to help you get stronger, add size, and improve performance.',
    },
  ];

  const results = [
    {
      name: 'Jake',
      result: 'Lost 18 lbs in 12 weeks',
    },
    {
      name: 'Maya',
      result: 'Added 65 lbs to her squat',
    },
    {
      name: 'Chris',
      result: 'Built a consistent 4-day routine',
    },
  ];

  const packages = [
    {
      title: 'Starter',
      price: '$99/mo',
      features: ['2 sessions per week', 'Basic workout plan', 'Weekly check-ins'],
      featured: false,
    },
    {
      title: 'Transformation',
      price: '$129/mo',
      features: ['3 sessions per week', 'Custom nutrition guidance', 'Priority support'],
      featured: true,
    },
    {
      title: 'Elite',
      price: '$299/mo',
      features: ['4 sessions per week', 'Advanced programming', 'Full accountability coaching'],
      featured: false,
    },
  ];

  const contactFields = [
    { label: 'Email', value: 'steelekade0@gmail.com' },
    { label: 'Phone', value: '(214) 808-9744' },
    { label: 'Location', value: 'San Marcos, Texas' },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-20 border-b border-orange-500/15 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xl font-bold tracking-wide">Train With Kade</p>
            <p className="text-sm text-white/60">Personal Training &amp; Lifestyle Coaching</p>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="transition hover:text-orange-400">About</a>
            <a href="#services" className="transition hover:text-orange-400">Services</a>
            <a href="#results" className="transition hover:text-orange-400">Results</a>
            <a href="#pricing" className="transition hover:text-orange-400">Pricing</a>
            <a href="#contact" className="transition hover:text-orange-400">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
            Build strength. Lose fat. Stay accountable.
          </p>
          <h1 className="max-w-2xl text-5xl font-bold leading-tight md:text-6xl">
            Personal training that gets real results.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            I help busy people get in shape with customized workouts, realistic nutrition habits, and coaching that keeps them consistent.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
            >
              Book a Free Consultation
            </a>
            <a
              href="#pricing"
              className="rounded-2xl border border-orange-500/30 px-6 py-3 font-semibold text-white transition hover:bg-orange-500/10 hover:text-orange-300"
            >
              View Packages
            </a>
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold">100+</p>
              <p className="text-sm text-white/60">Sessions coached</p>
            </div>
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold">1-on-1</p>
              <p className="text-sm text-white/60">Custom support</p>
            </div>
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold">Goal</p>
              <p className="text-sm text-white/60">Driven plans</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-6 shadow-2xl">
          <div className="rounded-[1.5rem] border border-orange-500/20 bg-neutral-900/95 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-400/90">Why clients choose me</p>
            <div className="mt-6 space-y-5">
              {[
                'Programs tailored to your current fitness level',
                'Simple nutrition guidance you can actually follow',
                'Coaching focused on consistency, not extremes',
                'Accountability that keeps you moving forward',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400 shadow shadow-orange-500/40" />
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400/90">About Me</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Your coach, Kade</h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-orange-500" />
            <p className="mt-6 leading-7 text-white/70">
              I&apos;m 21 years old and have been training for over 9 years. Fitness isn&apos;t just something I do — it&apos;s been a core part of my life since I was young. I&apos;m originally from Dallas, Texas and currently attend Texas State University.
            </p>
            <p className="mt-4 leading-7 text-white/70">
              Over the years, I&apos;ve built a strong foundation in strength training, muscle building, and fat loss — but more importantly, I understand how to make fitness sustainable. My coaching is built around real life, not extremes.
            </p>
            <p className="mt-4 leading-7 text-white/70">
              Outside of the gym, I&apos;m big into the outdoors — hunting, fishing, and staying active. I also have an amazing girlfriend, Savannah, who I&apos;ve been with for 4 years. That balance between discipline and enjoying life is something I bring into my coaching.
            </p>
            <p className="mt-4 leading-7 text-white/70">
              If you work with me, you&apos;re not just getting workouts — you&apos;re getting structure, accountability, and someone who actually cares about your results.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5 backdrop-blur-sm">
              <p className="text-2xl font-bold">9+</p>
              <p className="text-sm text-white/60">Years training experience</p>
            </div>
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5 backdrop-blur-sm">
              <p className="text-2xl font-bold">21</p>
              <p className="text-sm text-white/60">Years old &amp; active lifestyle</p>
            </div>
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5 backdrop-blur-sm">
              <p className="text-2xl font-bold">TXST</p>
              <p className="text-sm text-white/60">Texas State student</p>
            </div>
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5 backdrop-blur-sm">
              <p className="text-2xl font-bold">Real</p>
              <p className="text-sm text-white/60">Lifestyle-based coaching</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400/90">Services</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Coaching built around your goals</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-white/5 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-orange-400/50"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400/90">Results</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Real client wins</h2>
          </div>
          <p className="max-w-xl text-white/65">
            Progress looks different for everyone. The goal is sustainable results you can actually keep.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {results.map((item) => (
            <div
              key={item.name}
              className="rounded-[1.75rem] border border-orange-500/20 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-orange-400/40"
            >
              <p className="text-2xl font-bold">{item.result}</p>
              <p className="mt-2 text-white/60">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400/90">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Choose your coaching package</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => {
            const isFeatured = pkg.featured === true;
            const cardClassName = isFeatured
              ? 'rounded-[1.75rem] border border-orange-300 bg-gradient-to-b from-orange-400 to-orange-500 p-6 text-white shadow-2xl shadow-orange-500/30 scale-[1.02]'
              : 'rounded-[1.75rem] border border-orange-500/20 bg-white/5 p-6 text-white';
            const featureItemClassName = isFeatured
              ? 'rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm'
              : 'rounded-xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-sm';

            return (
              <div key={pkg.title} className={cardClassName}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold">{pkg.title}</h3>
                  {isFeatured ? (
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                      Most Popular
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-4xl font-bold">{pkg.price}</p>
                <p className="mt-2 text-sm opacity-80">Built for serious accountability and visible progress.</p>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className={featureItemClassName}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 rounded-[2rem] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-white/5 p-8 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400/90">Contact</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Start your transformation today</h2>
            <p className="mt-4 max-w-lg leading-7 text-white/65">
              Ready to get started? Reach out for a free consultation and let&apos;s build a plan around your schedule, goals, and experience level.
            </p>
            <div className="mt-8 space-y-3 text-white/80">
              {contactFields.map((field) => (
                <p key={field.label}>
                  {field.label}: {field.value}
                </p>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-[1.5rem] border border-orange-500/20 bg-neutral-900 p-6 shadow-xl shadow-orange-500/10">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="w-full rounded-xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-orange-400"
              placeholder="Full Name"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              className="w-full rounded-xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-orange-400"
              placeholder="Phone Number"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="w-full rounded-xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-orange-400"
              placeholder="Email"
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                name="height"
                value={formData.height}
                onChange={handleChange}
                type="text"
                className="w-full rounded-xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-orange-400"
                placeholder={"Height (e.g. 5'10)"}
              />
              <input
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                type="text"
                className="w-full rounded-xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-orange-400"
                placeholder="Weight (lbs)"
              />
            </div>

            <input
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              type="date"
              className="w-full rounded-xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white outline-none focus:border-orange-400"
            />

            <input
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              type="text"
              className="w-full rounded-xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-orange-400"
              placeholder="Primary Goal (lose weight, build muscle, etc.)"
            />

            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="min-h-[120px] w-full rounded-xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-orange-400"
              placeholder="Anything else I should know? Injuries, experience level, schedule, or other details."
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-400"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}