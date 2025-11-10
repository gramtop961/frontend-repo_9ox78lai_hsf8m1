import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PillarsSection from './components/PillarsSection';
import NumbersSection from './components/NumbersSection';
import TeamJoinSection from './components/TeamJoinSection';

const App = () => {
  useEffect(() => {
    const onHashLinkClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', `#${id}`);
      }
    };
    document.addEventListener('click', onHashLinkClick);
    return () => document.removeEventListener('click', onHashLinkClick);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-black antialiased">
      {/* Simple top nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-sm text-zinc-200">
          <a href="#hero" className="font-semibold tracking-wide text-white">GanG of Spirits</a>
          <div className="hidden gap-6 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#pillars" className="hover:text-white">Pillars</a>
            <a href="#numbers" className="hover:text-white">Numbers</a>
            <a href="#team" className="hover:text-white">Team</a>
            <a href="#join" className="hover:text-white">Join</a>
          </div>
        </nav>
      </header>

      <main className="relative">
        <HeroSection />
        <AboutSection />
        <PillarsSection />
        <NumbersSection />
        <TeamJoinSection />
        <footer className="w-full border-t border-white/10 bg-black py-10 text-center text-zinc-400">
          © {new Date().getFullYear()} GanG of Spirits. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default App;
