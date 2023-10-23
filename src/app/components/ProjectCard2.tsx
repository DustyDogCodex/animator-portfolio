'use client'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBehance } from "@fortawesome/free-brands-svg-icons"

type ProjectProps = {
    title: string,
    subtitle: string,
    links: { behance: string, instagram: string }
}

function ProjectCard2({ title, subtitle, links }: ProjectProps) {

    //lowercasing project titles to reference project screenshots.
    const projectTitle = title.split(" ").join("-").toLowerCase()

    //this controls the animations for each individual project
    const projectAnimation = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    }

    return (
        <motion.div 
            variants={projectAnimation}
            className="relative"    
        >   
            {/* Brief project description when user hovers over project screenshot */}
            <div
                className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 z-30 flex bg-slate-200/80 flex-col justify-center items-center text-center p-5 text-deep-blue"
            >
                <p 
                    className="text-lg md:text-2xl font-roboto"
                >
                    {title}
                </p>
                <p className="mt-2 text-sm sm:text-base">
                    {subtitle}
                </p>

                {/* github and live demo links for project */}
                <div
                    className="flex items-center mt-2"
                >
                    <a href={`${links.behance}`} target="_blank">
                        <FontAwesomeIcon 
                            icon={faBehance} 
                            style={{color: "#000000", height:'25px', width:'25px'}} 
                        />
                    </a>
                </div>
            </div>

            {/* project mp4 */}
            <video 
                src={`/${projectTitle}.mp4`} 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
            />
        </motion.div>
    )
}

export default ProjectCard2