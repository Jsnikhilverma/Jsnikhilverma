import React from 'react'
import './mywork.css'
import mywork_data from '../../assets/mywork_data'
import arrow from '../../assets/arrow.png'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt="" />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  )
}

export default MyWork
