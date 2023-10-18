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
            className='card w-[400px] h-[600px]'
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
                <div className='card-front bg-card-bg w-full h-full bg-cover bg-no-repeat rounded-lg'>
                    <h1 className='text-white'>Front</h1>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur molestias facere quo doloremque veniam laborum dolorem libero ea unde.</p>
                </div>

                {/* back of card */}
                <div className='card-back bg-card-bg w-full h-full bg-cover bg-no-repeat rounded-lg'>
                    <h1 className='text-white'>Back</h1>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cum possimus amet quasi dicta reprehenderit repellat cumque. Optio, non exercitationem!</p>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCard