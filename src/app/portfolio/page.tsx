import ProjectCard from "../components/ProjectCard"

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <video src="/project1.mp4" autoPlay loop muted className="w-full h-full"/>
                    <video src="/project2.mp4" autoPlay loop muted />
                    <video src="/project3.mp4" autoPlay loop muted />
                    <video src="/project4.mp4" autoPlay loop muted />
                    <video src="/project5.mp4" autoPlay loop muted />
                    <video src="/project6.mp4" autoPlay loop muted className="w-full h-full object-cover"/>
                </div>
            </div>
        </section>
    )
}

export default Portfolio