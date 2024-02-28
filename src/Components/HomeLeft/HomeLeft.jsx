import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'

const HomeLeft = () => {
  return (
    <div className='HomeLeft' style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
        <ProfileCard />
        <FollowersCard />
        <span style={{alignSelf: 'center', color: "var(--blue)", fontWeight: "bold", cursor:'pointer' }}>Show More</span>
    </div>
  )
}

export default HomeLeft