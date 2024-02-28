import React from 'react'
import './Trends.css'
import {TrendData} from '../../Data/TrendData'

const Trends = () => {
  return (
    <div className='Trends'>
    <h3>Trending Right Now</h3>
    { TrendData.map((Trend, t) => {
        return(
            <div className="Trend" key={t} >
                <span>#{Trend.name}</span>
                <span>{Trend.shares}k shares</span>
            </div>
        )})
    }
</div>
  )
}

export default Trends