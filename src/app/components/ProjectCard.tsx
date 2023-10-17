import { useState } from 'react'
import { motion } from 'framer-motion'

function ProjectCard() {
    //useState for toggling flipped or not flipped status of project card
    const [ flipped, setFlipped ] = useState<Boolean>(false)

    //function to handle flipping animation
    function flipCard(){
        setFlipped(!flipped)
    }

    return (
        <div 
            className='w-[600px] h-[360px] rounded-lg'
            onClick={flipCard}    
        >
            <motion.div
                className='w-full h-full'
                initial={false}
                animate={{
                    rotateY: flipped ? 180 : 360
                }}
                transition={{
                    duration: 0.6,
                    animationDirection: 'normal'
                }}
            >
                {/* front of card */}
                <div className='bg-card-bg'>
                    <h1>Front</h1>
                </div>

                {/* back of card */}
                <div>
                    <h1>Back</h1>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCard