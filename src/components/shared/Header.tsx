import logoVelada from '../../assets/logoVeladaFondo.webp'

const Header = () => {
  return (
    <header className="relative bg-black text-txt-secondary font-libre-reg pt-6 pb-5">
      <nav className="flex justify-center items-center uppercase text-xs">
        <div className="hidden md:flex justify-around items-center gap-3 w-full tracking-[.5em] mb-15">
          <a href="#sobre-mi">Sobre mi</a>
          <a href="#habilidades">Habilidades</a>
        </div>
        <div className="flex justify-center w-60 shrink-0 z-1">
          <img src={logoVelada} alt="LogoVelada" />
        </div>
        <div className="hidden md:flex justify-around items-center gap-3 w-full tracking-[.5em] mb-15">
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>
      <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-linear-to-r from-transparent via-white/99 to-transparent z-0"></div>
    </header>
  )
}
export default Header
