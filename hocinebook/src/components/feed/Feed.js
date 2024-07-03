import React from 'react'
import Share from './share/Share'
import Post from './post/Post'

const Feed = () => {
  return (
    <div className='feed'>
      <Share/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed