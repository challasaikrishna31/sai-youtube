import React, { useEffect, useState } from 'react'
import { getYoutubePopularVideo } from '../Utils/helpers'
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        let data = await getYoutubePopularVideo()
        console.log(data.items)
        setVideoData(data.items);
    }
    if (videoData.length == 0)
        return <div>No Data Found</div>

    return (
        <div className='flex flex-wrap'>
            {videoData.map(video => <VideoCard key={video.id} video={video} />)}
        </div>
    )
}

export default VideoContainer