import React, { useState, useEffect } from 'react'

const ImageRotation = () => {

  const images = [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    "https://images.unsplash.com/photo-1574158622682-e40e69881006",
    "https://images.unsplash.com/photo-1495360010541-f48722b34f7d"
  ]

  const [rotation, setRotation] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 90)
    }, 2000)

    return () => {
      clearInterval(interval)
    }

  }, [])

  return (
    <div>

      <h2
        style={{
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          marginTop: "30px"
        }}
      >
        Image Rotation
      </h2>

      <img
        src={images[0]}
        alt="rotating-cat"
        style={{
          height: "200px",
          width: "200px",
          objectFit: "cover",
          transform: `rotate(${rotation}deg)`,
          transition: "transform 1s"
        }}
      />

    </div>
  )
}

export default ImageRotation