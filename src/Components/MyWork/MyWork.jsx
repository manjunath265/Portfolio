import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import portfolio from '../../assets/portfolio.png'
import powerBI from '../../assets/powerBI.png'
import images from '../../assets/images.jpeg'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id = 'work' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
        <a href = "https://github.com/manjunath265/Portfolio.git">
        <img src={portfolio} alt="hello" /> </a>
        <a href = "https://github.com/EdlaHareen/GROUP11.git">
        <img src={powerBI} alt="hello" /></a>
        <a href = "https://github.com/manjunath265/Inventory-Management-System.git">
        <img src={images} alt="hello" /></a>
        </div>
        <div className="mywork-showmore">
            <a href='https://github.com/manjunath265'>
            <p>Show More</p></a>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork
