import { useState } from 'react'
import { motion } from 'framer-motion'

function ProjectCard() {
    //useState for toggling flipped or not flipped status of project card
    const [ flipped, setFlipped ] = useState<Boolean>(false)
    const [ animated, setAnimated ] = useState<Boolean>(false)

    //function to handle flipping animation
    function flipCard(){
        if(!animated){
            setFlipped(!flipped)
            setAnimated(true)
        }
    }

    return (
        <div 
            className='card w-[400px] h-[600px] rounded-lg border border-black'
            onClick={flipCard}    
        >
            <motion.div
                className='card-inside w-full h-full'
                initial={false}
                animate={{
                    rotateY: flipped ? 180 : 360
                }}
                transition={{
                    duration: 0.6,
                    animationDirection: 'normal'
                }}
                onAnimationComplete={() => setAnimated(false)}
            >
                {/* front of card */}
                <div className='card-front bg-card-front-bg w-full h-full'>
                    <h1 className='text-white'>Front</h1>
                </div>

                {/* back of card */}
                <div className='card-back bg-card-bg w-full h-full bg-contain bg-no-repeat rotateY'>
                    <h1 className='text-white'>Back</h1>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCard