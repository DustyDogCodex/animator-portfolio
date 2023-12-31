'use client'
import { motion } from "framer-motion"

function PageTransistion({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
        >                
            {children}
        </motion.div>
    )
}

export default PageTransistion