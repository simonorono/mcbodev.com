import React, { ReactNode } from 'react'

interface Props {
  name: string,
  href: string,
  className?: string,
  children?: ReactNode,
}

export function NewTabLink(props: Props) {
  const { name, href, className, children } = props

  return (
    <a
      href={href}
      aria-label={`${name} (opens in new window)`}
      target='_blank'
      rel='noreferrer'
      className={`underline ${className || ''}`}
    >
      {children || name}
    </a>
  )
}
