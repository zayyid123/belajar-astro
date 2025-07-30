import React, { useState } from 'react'

const About = () => {
  const [title, settitle] = useState('React Page')
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#32a2fdff",
      color: "white",
      fontSize: "2rem",
      fontWeight: "bold",
    }}>
      {title}
    </div>
  )
}

export default About
