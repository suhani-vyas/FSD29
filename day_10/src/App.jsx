import React, { useState, useEffect } from 'react'
import ImageSlider from './ImageSlider'
import ImageRotation from './ImageRotation'

const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return (
    <div>
      <h1>Counter App</h1>

      <div>{count}</div>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <ImageSlider />
      <ImageRotation />
    </div>
  )
}

export default App