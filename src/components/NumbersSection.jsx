import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Counter = ({ to, suffix = '', duration = 1.8 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const animate = (now) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      const next = Math.floor(eased * to);
      setValue(next);
      if (t < 1) requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [inView, to, duration]);

  return (
    <div ref={ref} className="text-5xl font-semibold text-white md:text-6xl">
      {value}
      {suffix}
    </div>
  );
};

const NumbersSection = () => {
  return (
    <section id="numbers" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-300/5 via-transparent to-cyan-400/5" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-5xl"
        >
          By the numbers
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 text-center backdrop-blur">
            <Counter to={120} suffix="+" />
            <p className="mt-2 text-zinc-300">Global activations</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 text-center backdrop-blur">
            <Counter to={35} suffix="k" />
            <p className="mt-2 text-zinc-300">Community members</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 text-center backdrop-blur">
            <Counter to={48} suffix="%" />
            <p className="mt-2 text-zinc-300">Avg. partner growth</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 text-center backdrop-blur">
            <Counter to={18} suffix="" />
            <p className="mt-2 text-zinc-300">Markets active</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
