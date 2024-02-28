import React from 'react'
import './HomeRight.css'
import Trends from '../Trends/Trends'


const HomeRight = () => {
  return (
    <div className='HomeRight'>
        <Trends />
        <button className="button button-hr">Share</button>
    </div>
  )
}

export default HomeRight