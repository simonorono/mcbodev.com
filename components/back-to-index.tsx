import React from 'react'
import Link from 'next/link'

export default function BackToIndex() {
  return (
    <div className="mt-8 sm:mt-0">
      <Link href="/" passHref>
        <a className="hover:font-bold">
          <span>&lt;- </span><span className="underline">go back</span>
        </a>
      </Link>
    </div>
  )
}
