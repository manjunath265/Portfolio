import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className="footer-top-left">
            <p>Master’s student in Information Systems (CGPA: 3.93/4) with experience in full-stack development, cloud computing, and DevOps. Proficient in Python, TypeScript, Java, and SQL. Strong foundation in API development (Flask, Express) and UI frameworks (React).</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type = "email" placeholder='Enter your email'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className='footer-bottom-left'>@2025 Manjunath Reddy Edla All Rights Reserved</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Contact With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
