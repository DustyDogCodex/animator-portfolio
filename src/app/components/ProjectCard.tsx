import { useState } from 'react'

function ProjectCard() {
    //useState for toggling flipped or not flipped status of project card
    const [ flipped, setFlipped ] = useState<Boolean>(false)

    return (
        <div>
            ProjectCard
        </div>
    )
}

export default ProjectCard