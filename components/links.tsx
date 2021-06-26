import React from 'react'
import Link from 'next/link'
import NewTabLink from './new-tab-link'

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
          href={link.url}
          passHref
        >
          <a
            className="underline"
            data-bold-on-hover={link.name}
          >
            {link.name}
          </a>
        </Link>
      ))}

      {links.filter(_ => _.newTab).map(link => (
        <NewTabLink
          href={link.url}
          key={link.name}
          name={link.name}
          boldOnHover={true}
        />
      ))}
    </div>
  )
}
