import fondoVelada from '../../assets/fondoVelada.webp'

const Contact = () => {
  return (
    <section className="px-8 mx-auto text-center w-full relative" id="contacto">
      <div className='absolute items-center justify-center top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h3 className="font-jost-semi text-txt-primary tracking-[0.3em] uppercase mb-2 text-[20px]">Contacto</h3>
        <h4 className="font-jost-reg text-txt-secondary mb-8">¿Hablamos?</h4>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-md">
          <a className='hover:text-txt-holder transition' href="mailto:luiherra25@gmail.com">luiherra25@gmail.com</a>
          <span className="hidden sm:inline opacity-30">|</span>
          <a className='flex hover:text-txt-holder transition' href="tel:+34645052251">645 05 22 51</a>
        </div>
        <div className='mt-20'>
          <a href='https://github.com/LuiherraDev/VeladaLHR' target='_blank' className="bg-txt-holder/40 border rounded-sm px-8 py-2 text-sm font-jost-semi tracking-widest hover:bg-txt-holder/70 transition">
            + Inspeccionar Código
          </a>
        </div>

      </div>

      <img alt="Footer decoration" className="w-full h-full object-cover" src={fondoVelada} />
    </section>
  )
}

export default Contact
