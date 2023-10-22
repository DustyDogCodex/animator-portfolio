import ProjectCard from "../components/ProjectCard"

function Portfolio() {
    return (
        <section 
            id="portfolio"
            className="bg-portfolio-bg bg-no-repeat w-full min-h-screen bg-cover flex items-center justify-center"    
        >
            <div className="container">
                <h1 className="text-center text-5xl text-amber-500">Portfolio</h1>
                
                {/* placeholder projects */}
                <div className="flex flex-wrap gap-10 p-3">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </section>
    )
}

export default Portfolio