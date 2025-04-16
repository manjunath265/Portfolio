import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/location_icon.svg'
import location_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {

  const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ef823cfc-851e-4eab-acd3-ef1ab57dceb2");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
      if(data.success){
        alert(data.message)
      }
    };




  return (
    
    <div id = 'contact' className='contact'>
      <div className='contact-title'>
      <h1>Get in Touch</h1>
      <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contactleft">
            <h1>Let's talk</h1>
            <p>Let's connect to collaborate on innovative solutions or exciting opportunities!</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>manjunathmanjunathreddy580@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>3143936029</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Saint Louis,MO</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor= "">Your Name</label>
            <input type = "text" placeholder='Enter Your Name' name = 'name'/>
            <label htmlFor = ''>Your Email</label>
            <input type = "email" placeholder='Enter your Email' name = 'Email'/>
            <label htmlFor= ''>Write your Message Here</label>
            <textarea name = 'message' rows = '8' placeholder='Enter your message'></textarea>
            <button type = "submit" className='contact-submit'>submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
