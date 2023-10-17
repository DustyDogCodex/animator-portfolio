import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        Blog
    </main>
  )
}
