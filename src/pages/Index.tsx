import React from 'react'
import Template from './Template'

export default function Index() {
  return (
    <Template
      h1="Simón Oroño"
      h2="Computer Scientist & Software Developer"
    >
      <div className="mt-14 text-xl sm:max-w-lg space-y-8">
        <p>
          I'm a computer scientist and software developer from Maracaibo, Venezuela.
          I graduated with honors from La Universidad del Zulia.
        </p>

        <p>
          I work as a full stack web developer, but most of my experience is with
          back-end development, databases and SQL.
        </p>

        <p>
          My academic interests are programming language theory, graph theory and
          discrete mathematics.
        </p>
      </div>
    </Template>
  )
}
