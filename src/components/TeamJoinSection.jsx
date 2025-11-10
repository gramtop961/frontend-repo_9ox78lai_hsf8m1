import React from 'react';
import { motion } from 'framer-motion';

const people = [
  {
    name: 'Ava Laurent',
    role: 'Creative Director',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Mika Tan',
    role: 'Head of Partnerships',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Santiago Ruiz',
    role: 'Experiences Lead',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Lena Novak',
    role: 'Digital Producer',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop',
  },
];

const TeamJoinSection = () => {
  return (
    <section id="team" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-[0.07]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-5xl"
        >
          The Team
        </motion.h2>

        {/* Team grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {people.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-3 backdrop-blur"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(120px 80px at 70% 20%, rgba(255,255,255,0.25), transparent)' }} />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-medium">{p.name}</h3>
                <p className="text-sm text-zinc-400">{p.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join */}
        <div id="join" className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-amber-400/20 p-[1px]">
          <div className="relative rounded-3xl bg-zinc-950/60 p-10">
            <div className="pointer-events-none absolute inset-0 animate-pulse bg-[radial-gradient(60%_120%_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold md:text-3xl">Join the Collective</h3>
                <p className="mt-2 max-w-xl text-zinc-300">We partner with visionary brands, venues, and creators. Let’s build the next chapter for premium spirits—together.</p>
              </div>
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 font-medium text-white ring-1 ring-white/20"
              >
                <span className="absolute inset-0 animate-[gradient_6s_linear_infinite] bg-[length:200%_200%] bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300" />
                <span className="relative">Request Collaboration</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default TeamJoinSection;
