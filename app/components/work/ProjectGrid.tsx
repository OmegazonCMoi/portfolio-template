import ProjectCard from "./ProjectCard.tsx";
import {projects, ProjectProps} from "./projectDetails.ts";
import React from "react";

interface ProjectGridProps {
    showAll?: boolean;
}

const ProjectGrid = ({ showAll = false }: ProjectGridProps) => {
    const displayedProjects = showAll ? projects : projects.slice(0, 2);

    return (
        <>
            <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16  lg:mb-20 ">
                <h4
                    className={`text-[16px] md:text-[20px] lg:text-[34px] ${"text-[#e4ded7]"}`}
                >
                    Découvrez quelques-uns de mes projets !
                </h4>
            </div>

            <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
                {displayedProjects.map((project: ProjectProps) => (
                    <ProjectCard
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        technologies={project.technologies}
                        techNames={project.techNames}
                        techLinks={project.techLinks}
                        demo={project.demo}
                        image={project.image}
                        available={project.available}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectGrid;
