import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = () => {
    return (
        <div>
            <ReactPlayer
                url='videos/demo_vid.mp4'
                width='100%'
                height='100%'
                controls={true}
            />
        </div>
    );
}

export default VideoPlayer;

