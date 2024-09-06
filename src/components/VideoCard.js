import React from 'react'

const VideoCard = ({ info }) => {
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img
        className='rounded-lg'
        alt='thumbnail'
        src={info?.snippet?.thumbnails?.medium?.url}
      />
      <ul>
        <li className='font-bold py-2'>{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  )
}

export const AdVideoCard = ({ info }) => {
  return (
    <div className='p-1 m-1 border border-gray-250 rounded-lg'>
      <VideoCard info={info} />
      <h2 className='px-3 font-bold'>Ad</h2>
    </div>
  )
}

export default VideoCard
