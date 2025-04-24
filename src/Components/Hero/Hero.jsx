import React from 'react'
import './Hero.css'
import imgforreact from '../../assets/imgforreact.jpg'
const Hero = () => {
  return (
    <div id = 'home' className='hero'>
        <img src = {imgforreact} alt =""/>
        <h2><span>I'm Manjunath Reddy Edla,</span> Full-Stack Developer</h2>
        <p>Master's student in Information Systems (CGPA: 3.93/4) with experience in full-stack development and data engineering. Skilled in Python, TypeScript, Java, SQL, Flask, Express, and React. Proficient in building scalable APIs, data pipelines, and cloud-native applications using AWS, Azure, Docker, and Kubernetes. Passionate about full stack, performance optimization, and delivering impactful tech solutions.</p>
        <div className="hero-action">
            <div className = 'hero-connect'> connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
