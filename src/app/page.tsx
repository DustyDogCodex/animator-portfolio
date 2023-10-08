import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container w-full items-center justify-between">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </main>
  )
}
