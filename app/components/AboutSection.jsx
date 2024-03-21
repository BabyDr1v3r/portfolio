"use client"
import React, { useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: "SKills",
    id: "skills",
    content: (
      <div className="flex justify-normal items-start">
        <ul className="list-disc pl-2 mr-10">
          <li>Vue</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>TailwindCSS</li>
          <li>Node.js</li>
          <li>Express</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>Git</li>
          <li>Postman</li>
          <li>Insomnia</li>
          <li>Docker</li>
          <li>Prisma</li>
          <li>CSS/SASS</li>
          <li>Nest.js</li>
        </ul>
      </div>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Autodidact</li>
        <li>Udemy Courses</li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>OpenSource Proyects</li>
        <li>ValkoDevs</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-12 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-me.jpg" alt="about" width={700} height={700} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ml-5">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hi there! I&apos;m a 25-year-old programmer hailing from Córdoba, Argentina. I specialize in frontend development, but i kinda like more backend, where I thrive on crafting robust systems to power applications and websites.
          Beyond coding, I&apos;m an avid gamer, finding inspiration in the creativity and complexity of game software design. Sports like soccer and basketball are also passions of mine, keeping me active and balanced.
          I&apos;m always eager to tackle new challenges and explore innovative projects in the tech sphere. Let&apos;s connect and collaborate on exciting ventures!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
