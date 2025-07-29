import React, { useState } from 'react'

export const About = () => {
  const [title, settitle] = useState('About Page')
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      {title}
    </div>
  )
}
