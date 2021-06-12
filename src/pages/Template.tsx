import React, { ReactNode } from 'react'
import Header from '../components/Header'

interface Props {
  h1: string,
  h2?: string,
  children: ReactNode
}

export default function Template(props: Props) {
  const { h1, h2, children } = props

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="mx-2 lg:mx-0">
        <header>
          <Header {...{ h1, h2 }} />
        </header>

        <main>
          {children}
        </main>
      </div>
    </div>
  )
}
