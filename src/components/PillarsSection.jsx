import React from 'react';
import { motion } from 'framer-motion';
import { CalendarRange, Sparkles, Rocket } from 'lucide-react';

const items = [
  {
    title: 'Events',
    icon: CalendarRange,
    text:
      'Immersive tastings, residencies, and cultural moments that turn discovery into devotion.',
  },
  {
    title: 'Fairs',
    icon: Sparkles,
    text:
      'Showcase platforms and co-productions that spotlight new voices and timeless houses.',
  },
  {
    title: 'Digital Acceleration',
    icon: Rocket,
    text:
      'Content systems, data-led strategy, and partnerships that scale modern brand reach.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const child = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const PillarsSection = () => {
  return (
    <section id="pillars" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-400/5 via-transparent to-fuchsia-500/5" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-5xl"
        >
          Pillars
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={child}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(closest-side,rgba(168,85,247,0.12),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Icon className="h-6 w-6 text-white" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-zinc-300">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PillarsSection;
