import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-zinc-200">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-cyan-400/5" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-white md:text-5xl"
        >
          Where heritage meets the horizon
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 max-w-3xl text-lg text-zinc-300"
        >
          GanG of Spirits unites makers, curators, and technologists to amplify premium spirits brands. We blend the ritual of craft with the rhythm of culture—designing experiences, collaborations, and digital engines that move brands and communities forward.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
