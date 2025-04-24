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
        <img src={portfolio} alt="hello" />
        <img src={powerBI} alt="hello" />
        <img src={images} alt="hello" />
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork
