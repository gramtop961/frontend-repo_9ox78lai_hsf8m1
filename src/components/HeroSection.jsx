import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ambient gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute -inset-y-24 -inset-x-8 opacity-60" aria-hidden>
        <div className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-balance font-semibold leading-tight tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] md:text-7xl text-4xl"
        >
          GanG of Spirits
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-5 max-w-3xl text-pretty text-lg text-zinc-300 md:text-xl"
        >
          A global collective accelerating premium spirits brands through immersive events, co‑productions, and digital innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#pillars"
            className="group relative rounded-full px-6 py-3 text-base font-medium text-black outline-none"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 blur-md opacity-80 transition-opacity group-hover:opacity-100" />
            <span className="relative block rounded-full bg-white/95 px-6 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/70">
              Explore Pillars
            </span>
          </a>
          <a
            href="#join"
            className="group relative rounded-full px-6 py-3 text-base font-medium text-white ring-1 ring-white/20"
          >
            <span className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-50 transition-all group-hover:opacity-70" />
            <span className="relative block rounded-full bg-zinc-900/60 px-6 py-3 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/40">
              Join the Collective
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
