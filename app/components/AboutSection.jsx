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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="about" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a programmer, and as such, I&apos;m a nerd. What does that mean? It means I play video games.
            What do I mean by that? It means that if you&apos;re not sure about hiring me, we can have a 1v1 in CS:GO, LoL, Tekken 7, or even a classic like Tetris.
            So, if I win, you&apos;re obligated to hire me. Good luck.
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
