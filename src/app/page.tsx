'use client'
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import NavBar from "./components/Navbar"
import { useState } from 'react'

export default function Home() {
    //using state to identify the current page the user is browser
    const [ currentPage, setCurrentPage ] = useState<string>('home')

    return (
        <main className="flex min-h-screen flex-col">
            <NavBar 
                page='N/A' 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
            />
            <Hero />
            <About />
            <Portfolio />
            <Contact />
        </main>
    )
}
