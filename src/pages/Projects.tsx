import React from 'react'
import { Helmet } from 'react-helmet'
import Template from './Template'
import BackToIndex from '../components/BackToIndex'
import ProjectCard from '../components/ProjectCard'
import projectData from '../projects.json'

export default function Projects() {
  const projects = projectData as Project[]

  return (
    <>
      <Helmet>
        <title>Projects — Simón Oroño — mcbodev.com</title>
        <meta name="description" content="Projects built by Simón Oroño" />
      </Helmet>

      <Template
        h1="Projects"
      >
        <BackToIndex />

        <div className="mt-14 text-lg space-y-8">
          <p className="sm:max-w-lg">
            Besides writing code for a living, I also like writing code for
            recreational purposes. Here's a list of projects I've written
            in my free time.
          </p>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map(project => (
              <ProjectCard
                key={project.name}
                project={project}
              />
            ))}
          </div>
        </div>
      </Template>
    </>
  )
}
