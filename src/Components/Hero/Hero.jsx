import React from 'react'
import './Hero.css'
import imgforreact from '../../assets/imgforreact.jpg'
const Hero = () => {
  return (
    <div id = 'home' className='hero'>
        <img src = {imgforreact} alt =""/>
        <h1><span>I'm Manjunath Reddy Edla,</span> Full-Stack Developer</h1>
        <p>Master's student in Information Systems (CGPA: 3.93/4) with experience in full-stack development, cloud computing, and DevOps. Proficient in Python, TypeScript, Java, and SQL. Strong foundation in API development (Flask, Express) and UI frameworks (React). Hands-on experience with Kubernetes, Docker, CI/CD (Jenkins, GitHub Actions), and cloud platforms (AWS & Azure). Passionate about enhancing developer productivity through automation and scalable cloud solutions.</p>
        <div className="hero-action">
            <div className = 'hero-connect'> connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
