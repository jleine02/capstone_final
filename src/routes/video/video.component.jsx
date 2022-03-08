import React, {Fragment} from 'react';

import VideoPlayer from "../../components/video-player/video-player.component";
import {VideoContainer} from "./video.styles";

const Video = () => {
    console.log("hit");
    return (
        <Fragment>
            <VideoContainer>
                <VideoPlayer />
            </VideoContainer>
        </Fragment>
    );
}

export default Video;