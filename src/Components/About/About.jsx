import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import imgforreact from '../../assets/imgforreact.jpg'
const About = () => {
  return (
    <div id = 'about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src = {theme_pattern} alt =""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={imgforreact} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Master’s student in Information Systems (CGPA: 3.93/4) with experience in full-stack development, cloud computing, and DevOps. Proficient in Python, TypeScript, Java, and SQL. Strong foundation in API development (Flask, Express) and UI frameworks (React). </p>
                    <p>Hands-on experience with Kubernetes, Docker, CI/CD (Jenkins, GitHub Actions), and cloud platforms (AWS & Azure). Passionate about enhancing developer productivity through automation and scalable cloud solutions.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style ={{width:'50%'}}/></div>
                    <div className="about-skill"><p>JAVA</p><hr style ={{width:'70%'}}/></div>
                    <div className="about-skill"><p>REACT JS</p><hr style ={{width:'60%'}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style ={{width:'50%'}}/></div>
                </div>
            </div>
        </div>
      <div className="about-achievements">
      <div className="about-achievement">
        <h1>2</h1>
        <p>Years of Experience</p>
      </div>
      <hr/>
      <div className="about-achievement">
        <h1>4</h1>
        <p>Projects Completed</p>
      </div>
      </div>
    </div>
  )
}

export default About
