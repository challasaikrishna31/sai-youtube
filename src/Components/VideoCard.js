import React from 'react'

const VideoCard = ({ video }) => {
    const title = video.snippet.title
    const viewCount = video.statistics.viewCount
    const thumbNail = video.snippet.thumbnails.medium.url
    return (
        <div className='w-56 m-2 mb-2 rounded-lg'>
            <img src={thumbNail} alt="video thumbnail" className='rounded-lg mb-2 hover:scale-110' />
            <p className='text-black font-semibold'>{title}</p>
            <p className='text-gray-600'>{viewCount} views</p>
        </div>
    )
}

export default VideoCard