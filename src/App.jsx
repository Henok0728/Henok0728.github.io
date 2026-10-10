import { useEffect } from 'react';
import Preloader from './components/Preloader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

import { initPhysicsBackground } from './scripts/modules/physics-bg';
import { initLightBackground } from './scripts/modules/light-bg';
import { initScrollObserver } from './scripts/modules/animations';
import { morphProfile } from './scripts/modules/profile-morph';

export default function App() {
  useEffect(() => {

    initPhysicsBackground();
    initLightBackground();

    initScrollObserver();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = document.querySelectorAll('section');
          const scrollPosition = window.scrollY || window.pageYOffset;
          let current = 'home';

          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop - sectionHeight / 3) {
              const id = section.getAttribute('id');
              if (id) current = id;
            }
          });

          morphProfile(current !== 'home');
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Preloader />
      <div className="background-net" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Tools />
        <Experience />
        <Projects />
        <Certificates />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
