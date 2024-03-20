"use client"
import React, { useState, useRef } from "react"
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"
import { motion, useInView } from "framer-motion"

const projectsData = [
  {
    id: 1,
    title: "React Next Dashboard",
    description: "Acme Dashboard of invoices",
    image: "/images/projects/next-dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BabyDr1v3r/next-acme/tree/main",
    previewUrl: "https://next-acme-nine.vercel.app"
  },
  {
    id: 2,
    title: "Vue3 & TailwindCSS Lib",
    description: "Component library with Vue.js & TailwindCSS",
    image: "/images/projects/valko-devs-lib.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ValkoDevs/valko-ui",
    previewUrl: "/"
  }
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
