import Header from "../components/shared/Header"
import Footer from "../components/shared/Footer"

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-1 mx-auto text-center flex flex-col items-center justify-center" id="notFound">
        <h1 className="font-jost-semi text-txt-primary bg-black antialiased tracking-[0.3em] uppercase text-5xl">Page Not Found</h1>
      </section>
      <Footer />
    </div>
  )
}
export default NotFound