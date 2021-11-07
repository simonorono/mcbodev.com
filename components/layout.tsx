import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './header'
import NewTabLink from './new-tab-link'

interface Props {
  h1: string,
  h2: string,
  children?: ReactNode
}

export default function Template({ h1, h2, children }: Props) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <div className="max-w-screen-lg mx-auto">
        <div className="mx-2 lg:mx-0 h-screen flex flex-col">
          <header>
            <Header {...{ h1, h2 }} />
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <footer>
            <hr className="mt-4" />

            <div className="my-4 text-right sm:pb-0">
              <NewTabLink
                href={"https://github.com/simonorono/mcbodev.com"}
                name="Source code for this page."
                className="text-sm"
              />
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
