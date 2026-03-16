import fondoVelada from '../../assets/fondoVelada.webp'

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/5 text-center">
      <img alt="Footer decoration" className="w-full h-full" src={fondoVelada} />
      <p className="text-[10px] text-gray-600 uppercase tracking-widest">© 2026 Luis Hernández • Diseñado para el Impacto</p>
    </footer>
  )
}

export default Footer
