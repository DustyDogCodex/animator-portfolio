'use client'
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

function PageTransistion({
  children,
}: {
  children: React.ReactNode
}) {
    const path = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div key={path}>                
                {/* page sliding in animation  */}
                <motion.div
                    className="fixed top-0 left-0 z-40 w-full h-screen bg-emerald-400 origin-top"
                    initial={{ scaleY: 1}}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1, ease:[ 0.22, 1, 0.36, 1 ]}}
                />

                {/* page sliding out animation */}
                <motion.div
                    className="fixed top-0 left-0 z-40 w-full h-screen bg-sky-400 origin-top"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease:[ 0.22, 1, 0.36, 1 ]}}
                />

                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageTransistion