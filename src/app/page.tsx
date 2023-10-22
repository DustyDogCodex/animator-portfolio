import Hero from "./components/Hero"
import PageTransistion from "./components/PageTransition"

export default function Home() {
    return (
        <PageTransistion>
        <main className="flex min-h-screen flex-col">
            <Hero />
        </main>
        </PageTransistion>
    )
}
