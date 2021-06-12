import React from 'react'

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
  }
]

export default function Links() {
  return (
    <div className="space-x-2 sm:text-right">
      {links.filter(_ => _.newTab).map(link => (
        <a
          href={link.url}
          target='_blank'
          rel='noreferrer'
          className='underline'
          key={link.name}
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}
