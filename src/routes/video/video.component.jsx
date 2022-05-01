import React, {Fragment} from 'react';

import VideoPlayer from "../../components/video-player/video-player.component";
import {VideoContainer} from "./video.styles";

const Video = () => {
    console.log("hit");
    return (
        <Fragment>
            <div>
                <VideoPlayer />
            </div>
            <div>
                <h1>I WILL BE A PLACE TO ADD ANNOTATIONS</h1>
            </div>
        </Fragment>
    );
}

export default Video;