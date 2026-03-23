import { useRef } from 'react';

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import fondoIntro from '../../src/assets/fondoIntro.webp'
import flechaScroll from '../../src/assets/flechaScroll.svg'
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';
import Hero from '../components/home/Hero';

gsap.registerPlugin(ScrollTrigger);

const MainLayout = () => {

  const mainContainer = useRef<HTMLDivElement>(null);
  const fixedHeaderRef = useRef<HTMLDivElement>(null);
  const originalHeaderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = mainContainer.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=200%",
        scrub: 1,
        pin: true,
        onLeave: () => {
          gsap.set(container, { height: "auto", overflow: "visible" });
          gsap.set(".first-section", { position: "relative" });
          gsap.set(".intro-layers", { display: "none" });
          if (originalHeaderRef.current) originalHeaderRef.current.style.visibility = "hidden";
          if (fixedHeaderRef.current) {
            fixedHeaderRef.current.style.display = "block";
            const headerEl = fixedHeaderRef.current.querySelector("header");
            if (headerEl) {
              gsap.to(headerEl, { paddingTop: "0.5rem", paddingBottom: "0.5rem", duration: 0.4, ease: "power2.out" });
              const logoWrap = headerEl.querySelector("nav > div.flex.justify-center");
              if (logoWrap) gsap.to(logoWrap, { width: "10rem", duration: 0.4, ease: "power2.out" });
            }
          }
          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
        },
        onEnterBack: () => {
          gsap.set(".intro-layers", { display: "block" });
          gsap.set(".first-section", { position: "absolute", top: 0, width: "100%" });
          gsap.set(container, { height: "100vh", overflow: "hidden" });

          if (fixedHeaderRef.current) {
            const headerEl = fixedHeaderRef.current.querySelector("header");
            if (headerEl) {
              gsap.to(headerEl, { paddingTop: "1.5rem", paddingBottom: "1.5rem", duration: 0.4, ease: "power2.out" });
              const logoWrap = headerEl.querySelector("nav > div.flex.justify-center");
              if (logoWrap) gsap.to(logoWrap, { width: "15rem", duration: 0.4, ease: "power2.out" });
            }
            gsap.to(fixedHeaderRef.current, {
              opacity: 1,
              duration: 0.3,
              delay: 0.35,
              ease: "power2.out",
              onComplete: () => {
                if (!fixedHeaderRef.current) return;
                if (originalHeaderRef.current) originalHeaderRef.current.style.visibility = "visible";
                fixedHeaderRef.current.style.display = "none";
                gsap.set(fixedHeaderRef.current, { opacity: 1 });
                if (headerEl) {
                  gsap.set(headerEl, { clearProps: "paddingTop,paddingBottom" });
                  const logoWrap = headerEl.querySelector("nav > div.flex.justify-center");
                  if (logoWrap) gsap.set(logoWrap, { clearProps: "width" });
                }
              }
            });
          }
        },
      }
    });

    gsap.to(".parallax-item", {
      y: 15,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    tl.to(".parallax-bg", { scale: 2.5, y: -100, opacity: 0 }, 0)
      .to(".parallax-text-1", { y: -100, opacity: 0, stagger: 0.1 }, 0);

    tl.to(".parallax-bg", { opacity: 0, duration: 0.1 }, 0.3)
      .from(".why-section", {
        y: 200,
        opacity: 0,
        scale: 1,
        ease: "power2.out"
      }, "-=0.3");

    tl.to(".why-section", { opacity: 0, duration: 0.5 }, 0.6)
      .from(".first-section", {
        opacity: 0,
      }, "-=0.3")
      .to(".parallax-item", { opacity: 0, y: -50, duration: 0.3 }, 0.7);

  }, { scope: mainContainer });

  return (

    <>
      <div ref={fixedHeaderRef} className="fixed top-0 left-0 w-full z-50 bg-black/80" style={{ display: 'none' }}>
        <Header bgClass="bg-transparent" />
      </div>
      <div ref={mainContainer} className="relative h-screen overflow-hidden bg-black">

        <div className="intro-layers absolute inset-0">
          <div className="parallax-bg absolute inset-0 flex justify-center pointer-events-none">
            <img src="/fondoVelada.webp" className='w-full h-full object-cover scale-150' />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-between items-center pointer-events-none ">
            <div className=" parallax-text-1 text-center font-libre-semi text-txt-secondary text-sm sm:text-xl tracking-[.3em] sm:tracking-[.5em] leading-6 sm:leading-8 mt-10">
              <h2 className="mt-10">
                <p>HOLA,</p>
                <p>SOY <span className='text-gold-gradient'>LUIS HERNÁNDEZ</span>,</p>
                <p>JUNIOR FULL STACK DEVELOPER</p>
              </h2>
              <h2 className="mt-10">
                <p>Y ME ENCANTARÍA AYUDAR A</p>
                <p>CONSTRUIR LA WEB DE</p>
                <p><span className='text-gold-gradient'>LA VELADA DEL AÑO VI</span></p>
              </h2>
            </div>

            <img className="parallax-item mb-5 w-10" src={flechaScroll} />
          </div>

          <div className="why-section absolute inset-0 w-full h-full pointer-events-none">

            <img src={fondoIntro} className='absolute inset-0 w-full h-full object-cover' />
            <div className='absolute flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4'>
              <h3 className='text-center mb-4 sm:mb-10 font-libre-semi text-gold-gradient text-2xl sm:text-5xl'>
                ¿Por qué quiero participar?
              </h3>
              <h4 className='text-center font-libre-semi text-gold-gradient leading-7 sm:leading-10 text-base sm:text-3xl'>
                <p>Estoy formándome actualmente en el bootcamp JSCamp de MiduDev</p>
                <p>y sigo activamente las novedades de IA aplicada a programación.</p>
                <p>Este proyecto sería una oportunidad para aplicar mis conocimientos</p>
                <p>en un entorno real y contribuir a un evento que sigo desde sus</p>
                <p>primeras ediciones.</p>
              </h4>

            </div>

          </div>
        </div>

        <div className="first-section absolute top-0 w-full">
          <div ref={originalHeaderRef}>
            <Header />
          </div>
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
export default MainLayout