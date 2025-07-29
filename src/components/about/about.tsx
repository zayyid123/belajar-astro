import React, { useState } from 'react'

const About = () => {
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

export default About
