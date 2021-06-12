import React from 'react'
import Tag from './Tag'

interface Props {
  project: Project
}

export default function ProjectCard(props: Props) {
  const { name, description, tags } = props.project

  return (
    <div className="border p-2 space-y-4">
      <h3 className="text-2xl font-medium">{name}</h3>

      <p className="">{description}</p>

      <div className="space-y-2 relative bottom-0">
        {tags.map(tag => (
          <Tag
            className="mr-2"
            key={tag}
            text={tag}
          />
        ))}
      </div>
    </div>
  )
}
