import React, { useState } from 'react';
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import emailjs from 'emailjs-com';

const Footer = () => {
  
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log("Subscribe button clicked");
    if (!email) {
      alert('Please enter your email.');
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    const templateParams = { user_email: email };
  
    console.log("Sending email with params: ", templateParams); // Log template params
  
    setIsSubmitting(true); // Start submitting
  
    emailjs
      .send(
        "service_nfmc9cd", // Ensure this is correct
        "template_ol44c6l", // Ensure this is correct
        templateParams,
        "y7ls4rg-fRuNBUFwe" // Ensure this is correct
      )
      .then((response) => {
        console.log('EmailJS Success Response:', response); // Log the response to see it
        alert('Thanks for subscribing!');
        setEmail('');
        setIsSubmitting(false); // Stop submitting
      })
      .catch((err) => {
        console.error('EmailJS Error Response:', err); // Log detailed error
        alert('Something went wrong. Please try again later.');
        setIsSubmitting(false); // Stop submitting
      });
  };
  
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className="footer-top-left">
          <p>Master’s student in Information Systems (CGPA: 3.93/4) with experience in full-stack development, cloud computing, and DevOps. Proficient in Python, TypeScript, Java, and SQL. Strong foundation in API development (Flask, Express) and UI frameworks (React).</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update the email state
            />
          </div>
          <div className="footer-subscribe" onClick={handleSubscribe}>
          {isSubmitting ? 'Sending...' : 'Subscribe'}
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>@2025 Manjunath Reddy Edla All Rights Reserved</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Contact With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;