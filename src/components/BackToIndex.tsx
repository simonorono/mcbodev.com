import React from 'react'
import { Link } from 'react-router-dom'

export default function BackToIndex() {
  return (
    <div>
      <Link to="/" className="hover:font-bold">
        <span>&lt;- </span><span className="underline">go back</span>
      </Link>
    </div>
  )
}
