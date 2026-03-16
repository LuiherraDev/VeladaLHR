const Contact = () => {
  return (
    <section className="px-8 py-12 mx-auto text-center max-w-5xl" id="contacto">
      <h3 className="font-jost-semi text-txt-primary tracking-[0.3em] uppercase mb-2 text-[20px]">Contacto</h3>
      <h4 className="font-jost-reg text-txt-secondary mb-8">¿Hablamos?</h4>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
        <a href="mailto:luiherra25@gmail.com">luiherra25@gmail.com</a>
        <span className="hidden sm:inline opacity-30">|</span>
        <a href="tel:+34645052251">645 05 22 51</a>
      </div>
    </section>
  )
}

export default Contact
