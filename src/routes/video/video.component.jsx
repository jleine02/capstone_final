import {Fragment} from 'react';

import VideoCard from "../../components/video-card/video-card.component";
import {VideoContainer} from "./video.styles";

const Video = () => {
    return (
        <Fragment>
            <VideoContainer>
                <h1>I WILL BE A VIDEO!</h1>
            </VideoContainer>
        </Fragment>
    )
}

export default Video;