import React, { ReactNode } from 'react'
import Header from '../components/Header'
import { NewTabLink } from '../components/NewTabLink'

interface Props {
  h1: string,
  h2?: string,
  children?: ReactNode
}

export default function Template(props: Props) {
  const { h1, h2, children } = props

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="mx-2 lg:mx-0 h-screen flex flex-col">
        <header>
          <Header {...{ h1, h2 }} />
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer>
          <hr className="mt-8" />

          <div className="my-4 text-right">
            <NewTabLink
              href={"https://github.com/simonorono/mcbodev.com"}
              name="Source code for this page."
              className="text-sm"
            />
          </div>
        </footer>
      </div>
    </div>
  )
}
