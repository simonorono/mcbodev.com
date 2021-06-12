import React from 'react'
import Links from './Links'

interface Props {
  h1: String,
  h2?: String
}

export default function Header(props: Props) {
  const { h1, h2 } = props

  return (
    <div className="mt-10 sm:mt-20 mb-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
        <h1 className="text-5xl font-bold">{h1}</h1>
        {h2 && (
          <h2 className="font-medium">{h2}</h2>
        )}
      </div>

      <hr className="mt-2 mb-1" />

      <Links />
    </div>
  )
}
