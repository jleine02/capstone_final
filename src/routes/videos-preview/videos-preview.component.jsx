import React, {Fragment, useEffect, useState} from 'react';

import VideoCard from "../../components/video-card/video-card.component";

import {authGet} from '../../utils/aws/aws.utils';

const VideosPreview = () => {
    // const [isLoading, setIsLoading] = useState(true);
    const [videos, setVideos] = useState([]);
    const cloudFrontUrl = "https://d34ipgiljz8rfk.cloudfront.net"; // WILL BE SET AS ENV VARIABLE

    useEffect(() => {
        // setIsLoading(true);
        loadVideos();
        // setIsLoading(false);
    }, []);

    const loadVideos = async () => {
        try {
            console.log('requesting videos from cloudfront');
            const response = await authGet(cloudFrontUrl)

            if (response && response.videos) {
                setVideos(response.videos);
            }

        } catch (error) {
            console.log("Error occurred while fetching videos from cloudfront!");
            console.log(error);
        }
    };

    return (
        <Fragment>
            {videos.map((video) => {
                return (
                    <VideoCard
                        key={video.videoHash}
                        video={video}
                    />
                );
            })}
        </Fragment>
    );
};

export default VideosPreview;