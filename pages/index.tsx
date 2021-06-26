import React, { useState } from 'react'

export default function Index() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times!
      </button>
    </div>
  )
}
