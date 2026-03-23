import About from "../components/home/About"
import Contact from "../components/home/Contact"
import Projects from "../components/home/Projects"
import Skills from "../components/home/Skills"

const MainLayout = () => {
  return (
    <main>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
export default MainLayout
