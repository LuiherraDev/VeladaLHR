import { useGSAP } from '@gsap/react'
import fondoIntro from '../../assets/fondoIntro.webp'
import fondoVelada from '../../assets/fondoVelada.webp'
import { useRef } from 'react';
import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from '../../pages/Home';

gsap.registerPlugin(ScrollTrigger);

const Animation = () => {

  const mainContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    ScrollTrigger.create({
      trigger: ".intro-container",
      start: "bottom 30%",
      onEnter: () => {
        gsap.to(Home, {
          duration: 1,
          scrollTo: { autoKill: true }
        })
      },

      // gsap.to(Home, {duration: 1, scrollTo: 0});

    })


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top top",
        end: "+=250%", // Un poco más largo para la transición
        scrub: 1,
        pin: true,
      }
    });

    // 1. Efecto Parallax Inicial (como vimos antes)
    tl.to(".parallax-bg", { scale: 1.5, y: -100, opacity: 0 }, 0)
      .to(".parallax-item", { y: -100, opacity: 0, stagger: 0.1 }, 0);

    // 2. LA TRANSICIÓN: "Zoom Out" del Hero y Entrada del Contenido
    // Hacemos que el fondo se oscurezca y el texto principal suba
    tl.to(".parallax-bg", { filter: "brightness(0.1)", duration: 0.1 }, 0.3)
      .from(".next-section-preview", {
        y: 200,
        opacity: 0,
        scale: 0.9,
        ease: "power2.out"
      }, "-=0.3"); // Empieza un poco antes de que termine lo anterior

  }, { scope: mainContainer });

  return (

    <main>
      {/* SECCIÓN PINEADA (INTRO + TRANSICIÓN) */}
      <div ref={mainContainer} className="relative h-screen overflow-hidden bg-black">

        {/* Fondo Parallax */}
        <div className="parallax-bg absolute inset-0 flex justify-center w-screen">
          <img src={fondoVelada} />
        </div>

        {/* Contenido que desaparece */}
        <div className="relative z-10 flex h-full flex-col items-center justify-between">
          <h1 className="parallax-item text-center font-libre-semi text-gold-gradient tracking-[.2em] leading-10 mt-20">
            HOLA, <br />
            SOY LUIS HERNÁNDEZ, JUNIOR FULL STACK DEVELOPER <br />
            Y ME ENCANTARÍA AYUDAR A CONSTRUIR LA WEB DE <br />
            LA VELADA DEL AÑO VI</h1>
          <h2 className="parallax-item text-xl text-gray-300 mb-10">Desliza para entrar</h2>
        </div>

        {/* PREVIEW DE LA SIGUIENTE SECCIÓN: 
            Aparece mágicamente al final del scroll del Hero */}
        <div className="next-section-preview absolute bottom-10 w-full">

          <img src={fondoIntro} className='flex justify-center w-full h-full object-cover' />
          <div className='absolute items-center justify-center top-1/2 left-1/2 -translate-x-1/2'>
            <h3 className='text-center mb-10 font-libre-semi text-gold-gradient text-3xl'>
              ¿Por qué quiero participar?
            </h3>
            <h4 className='text-center font-libre-semi text-gold-gradient tracking-[.2em] leading-8'>
              Estoy formándome actualmente en el bootcamp JSCamp de MiduDev  <br />
              y sigo activamente las novedades de IA aplicada a programación. <br />
              Este proyecto sería una oportunidad para aplicar mis conocimientos <br />
              en un entorno real y contribuir a un evento que sigo desde sus <br />
              primeras ediciones.
            </h4>

          </div>

        </div>

      </div>

    </main>

  )
}
export default Animation