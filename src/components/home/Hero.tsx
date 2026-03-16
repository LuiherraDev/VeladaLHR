import imgHero from '../../assets/imgHero.webp'
import infojobs from '../../assets/infojobs.webp'
import linkedin from '../../assets/linkedin.webp'
import github from '../../assets/github.webp'

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-left text-sm w-full gap-5 md:flex-row">
      <div data-purpose="personal-details" className='sm:w-1/4 flex flex-col items-center justify-center order-2 md:order-1'>
        <h4 className="text-[20px] font-jost-reg text-txt-secondary tracking-widest mb-1">Nombre</h4>
        <p className="text-[20px] font-jost-semi text-txt-primary mb-4">Luis Hernández</p>
        <h4 className="text-[20px] font-jost-reg text-txt-secondary tracking-widest mb-1">Especialidad</h4>
        <p className="text-[20px] font-jost-semi text-txt-primary mb-4">JavaScript</p>
        <h4 className="text-[20px] font-jost-reg text-txt-secondary tracking-widest mb-1">Training</h4>
        <div className='flex flex-col items-center font-jost-semi text-txt-primary text-[20px]'>
          <p className="leading-relaxed">JSCamp - MiduDev</p>
          <p className="leading-relaxed">React Udemy</p>
          <p className="leading-relaxed">IA aplicada</p>
        </div>

      </div>

      <div className="relative mb-12 order-1 md:order-2">
        <div className="w-120 h-120">
          <img alt="Luis Hernández" className="w-full h-full" src={imgHero} />
          <div className='flex flex-row justify-center items-center gap-20'>
            <a href="https://www.infojobs.net/sevilla/programador-web-para-velada-vi/of-ia56eb7e9cb4921866babab7c6f9e1d" target="_blank">
              <img alt='InfojobsIcon' src={infojobs} />
            </a>
            <a href="https://www.linkedin.com/in/luis-hernández-ramírez-99619115b" target="_blank">
              <img alt='LinkedinIcon' src={linkedin} />
            </a>
            <a href="https://github.com/LuiherraDev" target="_blank">
              <img alt='GithubIcon' src={github} />
            </a>

          </div>

        </div>
      </div>

      <div className="text-right sm:text-left sm:w-1/4 flex flex-col items-center justify-center order-3 md:orde" data-purpose="career-details">
        <h4 className="text-[20px] font-jost-reg text-txt-secondary tracking-widest mb-1">Clase</h4>
        <p className="text-[20px] font-jost-semi text-txt-primary mb-4">Junior Full Stack</p>
        <h4 className="text-[20px] font-jost-reg text-txt-secondary tracking-widest mb-1">Stack</h4>
        <p className="text-[20px] font-jost-semi text-txt-primary leading-relaxed mb-4 w-1/2 text-center ">JavaScript, React, Node.js, TypeScript, MongoDB, Express.js</p>
        <h4 className="text-[20px] font-jost-reg text-txt-secondary tracking-widest mb-1">Herramientas</h4>
        <p className="text-[20px] font-jost-semi text-txt-primary">Trello, GitHub</p>
      </div>
      {/* <div className="flex justify-center space-x-6">
        <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-velada-gold transition group" href="#">
        </a>
        <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-velada-gold transition group" href="#">
        </a>
      </div> */}
    </section>
  )
}
