import VideoCard from "../video-card/video-card.component";

import {Preview, VideoPreviewContainer} from "./video-preview.styles";


const VideoPreview = ({videos}) => {
    return (
        <VideoPreviewContainer>
            <Preview>
                {videos &&
                    videos.map((video) => (
                        <VideoCard key={video.id} video={video}/>
                    ))}
            </Preview>
        </VideoPreviewContainer>
    );
};

export default VideoPreview;