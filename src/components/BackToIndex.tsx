import React from 'react'
import { Link } from 'react-router-dom'

export default function BackToIndex() {
  return (
    <div>
      <Link to="/">
        <span>&lt;- </span><span className="underline">go back</span>
      </Link>
    </div>
  )
}
