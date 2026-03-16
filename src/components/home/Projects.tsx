const Projects = () => {
  return (
    <section className="px-8 py-12 mx-auto text-center max-w-5xl" id="proyectos">
      <h3 className="font-jost-semi text-txt-primary tracking-[0.3em] uppercase mb-2 text-[20px]">Proyectos</h3>
      <h4 className="font-jost-reg text-txt-secondary mb-8">Proyectos personales que me motivan</h4>
      <div className="bg-card-bg/50 border-white/10 rounded-2xl p-8 backdrop-blur-sm" data-purpose="project-card">
        <h4 className="text-4xl font-jost-semi tracking-widest text-white mb-6 uppercase">IAIA</h4>
        <p className="leading-relaxed text-txt-primary text-[20px] font-jost-reg mx-auto mb-8 max-w-3xl">
          <span className="text-txt-holder">iaia</span> es una plataforma web en desarrollo pensada para conectar a personas mayores con cuidadores que puedan ofrecer apoyo y acompañamiento.
          La idea surge de la necesidad de facilitar el acceso a cuidados y asistencia, utilizando una interfaz sencilla que permita poner en contacto a quienes necesitan ayuda con quienes pueden proporcionarla. Este proyecto forma parte de mi proceso de aprendizaje como Junior Full Stack Developer.
        </p>
        <button className="bg-transparent border border-white/40 px-8 py-2 text-[10px] font-jost-semi tracking-widest hover:bg-txt-holder hover:text-black transition">
          + INFO
        </button>
      </div>
    </section>
  )
}

export default Projects
