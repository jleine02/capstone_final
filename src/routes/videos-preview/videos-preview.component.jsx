import {Fragment} from 'react';

import fakeVideos from '../../fake-data';
import VideoCard from "../../components/video-card/video-card.component";

const VideosPreview = () => {
    const videos = fakeVideos;
    console.log(videos);
    return (
        <Fragment>
            {videos.map((video) => {
                return (
                    <VideoCard key={video.id} video={video}/>
                );
            })}
        </Fragment>
    );
};

export default VideosPreview;