import About from "../components/home/About"
import Contact from "../components/home/Contact"
import Hero from "../components/home/Hero"
import Projects from "../components/home/Projects"
import Skills from "../components/home/Skills"

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
export default Home
