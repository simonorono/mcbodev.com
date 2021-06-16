import React from 'react'
import { CodeIcon, GlobeIcon } from '@heroicons/react/outline'
import { NewTabLink } from './NewTabLink'

import Tag from './Tag'

interface Props {
  project: Project
}

export default function ProjectCard(props: Props) {
  const { name, description, tags, url, vcs } = props.project

  return (
    <div className="flex flex-col border p-2 space-y-4">
      <h3 className="text-2xl font-medium">{name}</h3>

      <div className="flex flex-col items-baseline space-y-3 sm:space-y-0">
        <NewTabLink
          className="inline-flex items-center space-x-1 hover:font-bold"
          href={url}
          name={`${name} Website`}
        >
          <GlobeIcon className="h-5 w-5" aria-hidden='true' />
          <span className="underline"> Website</span>
        </NewTabLink>

        <NewTabLink
          className="inline-flex items-center space-x-1 hover:font-bold"
          href={vcs}
          name={`${name} Repository`}
        >
          <CodeIcon className="h-5 w-5" aria-hidden='true' />
          <span className="underline"> Repository</span>
        </NewTabLink>
      </div>

      <p className="flex-grow pt-2">{description}</p>

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
