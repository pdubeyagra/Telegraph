import React from 'react'
import PostShare from '../../Components/PostShare/PostShare'
import Post from '../../Components/Post/Post'

const HomeCenter = () => {
  return (
    <div className='HomeCenter' style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
        <PostShare />
        <Post />
    </div>
  )
}

export default HomeCenter