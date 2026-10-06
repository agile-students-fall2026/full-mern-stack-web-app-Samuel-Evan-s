import { useState, useEffect } from 'react'
import axios from 'axios'
import './AboutUs.css'

const AboutUs = () => {
  const [about, setAbout] = useState({ paragraphs: [] })

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`)
      .then(response => setAbout(response.data))
  }, [])

  return (
    <div className="AboutUs">
      <h1>{about.title}</h1>
      <img src={about.photoUrl} alt="me" />
      {about.paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  )
}

export default AboutUs
