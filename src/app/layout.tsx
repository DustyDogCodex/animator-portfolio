import './globals.css'
import type { Metadata } from 'next'
import { Calligraffitti } from 'next/font/google'
import NavBar from './components/Navbar'

const caligraffiti = Calligraffitti({ display:'swap', weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Shreya\'s Portfolio',
  description: 'Animator Portfolio for Shreya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`bg-primary-bg text-primary-text ${caligraffiti.className}`}>
            <NavBar />
            {children}
        </body>
    </html>
  )
}
