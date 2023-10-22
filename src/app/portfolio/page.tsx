'use client'
import ProjectCard from "../components/ProjectCard"
import ProjectCard2 from "../components/ProjectCard2"
import { motion } from "framer-motion"

/* project list */
const projects = [
    {
        title: 'project1',
        subtitle: 'project1',
        links: {
            behance:'https://www.behance.net/',
            instagram:'https://www.instagram.com/'
        }
    },
    {
        title: 'project2',
        subtitle: 'project2',
        links: {
            behance:'https://www.behance.net/',
            instagram:'https://www.instagram.com/'
        }
    },
    {
        title: 'project3',
        subtitle: 'project3',
        links: {
            behance:'https://www.behance.net/',
            instagram:'https://www.instagram.com/'
        }
    },
    {
        title: 'project4',
        subtitle: 'project4',
        links: {
            behance:'https://www.behance.net/',
            instagram:'https://www.instagram.com/'
        }
    },
    {
        title: 'project5',
        subtitle: 'project5',
        links: {
            behance:'https://www.behance.net/',
            instagram:'https://www.instagram.com/'
        }
    },
    {
        title: 'project6',
        subtitle: 'project6',
        links: {
            behance:'https://www.behance.net/',
            instagram:'https://www.instagram.com/'
        }
    }
]

function Portfolio() {
    return (
        <section 
            id="portfolio"
            className="bg-portfolio-bg bg-no-repeat w-full min-h-screen bg-cover flex items-center justify-center"    
        >
            <div className="container pt-24">
                <h1 className="text-center text-5xl text-amber-500 mb-10">Portfolio</h1>
                
                {/* placeholder projects */}
                {/* <div className="flex flex-wrap gap-10 p-3">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div> */}

                {/* Secondary portfolio design */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {}, 
                        visible: {
                            transition: { staggerChildren: 0.2 }
                        }}}
                    >
                    {projects.map((project,index) => 
                        <ProjectCard2 
                            key={index}
                            title={project.title}
                            subtitle={project.subtitle}
                            links={project.links}
                        />
                    )}
                </motion.div>
            </div>
        </section>
    )
}

export default Portfolio