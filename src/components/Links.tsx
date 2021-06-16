import React from 'react'
import { Link } from 'react-router-dom'
import { NewTabLink } from './NewTabLink'

const links = [
  {
    name: 'twitter',
    url: 'https://twitter.com/simonorono',
    newTab: true,
  },
  {
    name: 'github',
    url: 'https://github.com/simonorono',
    newTab: true
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/simonorono',
    newTab: true
  },
  {
    name: 'projects',
    url: '/projects'
  }
]

export default function Links() {
  return (
    <div className="space-x-2 sm:text-right">
      {links.filter(_ => !_.newTab).map(link => (
        <Link
          key={link.name}
          to={link.url}
          className="underline"
          data-bold-on-hover={link.name}
        >
          {link.name}
        </Link>
      ))}

      {links.filter(_ => _.newTab).map(link => (
        <NewTabLink
          href={link.url}
          key={link.name}
          name={link.name}
        />
      ))}
    </div>
  )
}
