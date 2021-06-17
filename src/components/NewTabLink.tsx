import React, { ReactNode } from 'react'

interface Props {
  name: string,
  href: string,
  className?: string,
  children?: ReactNode,
  boldOnHover?: boolean
}

export function NewTabLink(props: Props) {
  const { name, href, className, children, boldOnHover } = props

  return (
    <a
      href={href}
      aria-label={`${name} (opens in new window)`}
      target='_blank'
      rel='noreferrer'
      className={`underline ${className || ''}`}
      data-bold-on-hover={boldOnHover ? name : null}
    >
      {children || name}
    </a>
  )
}
