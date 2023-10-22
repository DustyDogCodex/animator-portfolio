'use client'
import { motion, AnimatePresence } from "framer-motion"

function PageTransistion({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <AnimatePresence mode="wait">
            <motion.div>
                {/* page sliding in animation  */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-screen bg-emerald-500 origin-bottom"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1, ease:[ 0.22, 1, 0.36, 1 ]}}
                />
                    {children}
                {/* page sliding out animation */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-screen bg-indigo-900 origin-top"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 1, ease:[ 0.22, 1, 0.36, 1 ]}}
                />
            </motion.div>
        </AnimatePresence>
    )
}

export default PageTransistion