import { useRef } from 'react';

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import fondoIntro from '../../assets/fondoIntro.webp'
import fondoVelada from '../../assets/fondoVelada.webp'
import flechaScroll from '../../assets/flechaScroll.svg'

import Home from '../../pages/Home';
import Header from './Header';
import Hero from './Hero';

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

    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
      }
    });

    tl.to(".parallax-bg", { scale: 2.5, y: -100, opacity: 0 }, 0)
      .to(".parallax-text-1", { y: -100, opacity: 0, stagger: 0.1 }, 0);

    tl.to(".parallax-bg", { filter: "brightness(0.1)", duration: 0.1 }, 0.3)
      .from(".why-section", {
        y: 200,
        opacity: 0,
        scale: 0.9,
        ease: "power2.out"
      }, "-=0.3");

    tl.to(".why-section", { opacity: 0, duration: 0.5 }, 0.6)
      .from(".first-section", {
        opacity: 0,
      }, "-=0.3");

  }, { scope: mainContainer });

  return (

    <section>
      <div ref={mainContainer} className="relative h-screen overflow-hidden bg-black">

        <div className="parallax-bg absolute inset-0 flex justify-center pointer-events-none">
          <img src={fondoVelada} className=' scale-150 object-cover' />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between items-center pointer-events-none ">
          <div className=" parallax-text-1 text-center font-libre-semi text-txt-secondary text-xl tracking-[.5em] leading-8 mt-10">
            <h2 className="mt-10">
              HOLA,<br />
              SOY <span className='text-gold-gradient'>LUIS HERNÁNDEZ</span>,<br />
              JUNIOR FULL STACK DEVELOPER
            </h2>
            <h2 className="mt-10">
              Y ME ENCANTARÍA AYUDAR A<br />
              CONSTRUIR LA WEB DE <br />
              <span className='text-gold-gradient'>LA VELADA DEL AÑO VI</span>
            </h2>
          </div>

          <img className="parallax-item mb-5 w-10" src={flechaScroll} />
        </div>

        <div className="why-section absolute bottom-10 w-full pointer-events-none">

          <img src={fondoIntro} className='w-full h-full object-cover' />
          <div className='absolute items-center justify-center top-1/2 left-1/2 -translate-x-1/2'>
            <h3 className='text-center mb-10 font-libre-semi text-gold-gradient text-5xl'>
              ¿Por qué quiero participar?
            </h3>
            <h4 className='text-center font-libre-semi text-gold-gradient leading-10 text-3xl'>
              Estoy formándome actualmente en el bootcamp JSCamp de MiduDev
              y sigo activamente las novedades de IA aplicada a programación.
              Este proyecto sería una oportunidad para aplicar mis conocimientos
              en un entorno real y contribuir a un evento que sigo desde sus
              primeras ediciones.
            </h4>

          </div>

        </div>
        <div className="first-section absolute top-0 w-full">
          <Header />
          <Hero />
        </div>

      </div>
    </section>
  )
}
export default Animation