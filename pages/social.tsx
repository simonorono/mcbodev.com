import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import BackToIndex from '../components/back-to-index'
import NewTabLink from '../components/new-tab-link'
import { title } from '../utils'

export default function Social() {
  const twitterLink = (
    <NewTabLink
      className="font-bold whitespace-nowrap"
      name="@simonorono"
      href="https://twitter.com/simonorono"
    />
  )

  const discordUsername = (
    <span className="font-bold whitespace-nowrap">simonorono#7279</span>
  )

  const ggAppLink = (
    <NewTabLink
      className="font-bold"
      name="GGApp"
      href="https://ggapp.io/simonorono"
    />
  )

  const photomodeProfile = (
    <NewTabLink
      className="font-bold"
      name="photomode.io"
      href="https://photomode.io/profile/t15k8gpUj5PKRQ1AiK4Aeh9hfOB3"
    />
  )

  return (
    <>
      <Head>
        <title>{title('Social')}</title>
        <meta name="description" content="Where to find me. Social and gaming profiles." />
      </Head>

      <Layout
        h1="Social"
        h2="Where to find me. Social and gaming profiles."
      >
        <BackToIndex />

        <div className="mt-14 text-lg space-y-8 sm:max-w-lg">
          <p>
            I'm on Twitter as {twitterLink}. I can also be found on Discord as {discordUsername}.
          </p>

          <p>
            My gaming backlog can be found on the {ggAppLink}. Occasionally, I also share screenshots of games I play
            on {photomodeProfile}.
          </p>
        </div>
      </Layout>
    </>
  )
}
