import React from 'react'
import { Helmet } from 'react-helmet'
import Template from './Template'
import BackToIndex from '../components/BackToIndex'

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects — Simón Oroño — mcbodev.com</title>
        <meta name="description" content="Projects built by Simón Oroño" />
      </Helmet>

      <Template
        h1="Projects"
      >
        <BackToIndex />
      </Template>
    </>
  )
}
