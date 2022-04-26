import {Fragment, useEffect, useState} from 'react';

import fakeVideos from '../../fake-data';
import VideoCard from "../../components/video-card/video-card.component";

const VideosPreview = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [videos, setVideos] = useState([]);
    const axios = require("axios").default;

    useEffect(() => {
        loadVideos();
    }, []);

    const loadVideos = async () => {
        try {
            const response = await axios({
                method: "GET",
                url: "https://d34ipgiljz8rfk.cloudfront.net",
            })

            if (response && response.videos) {
                setVideos(response.videos);
            }

            setIsLoading(false);
        } catch (error) {
            console.log("Error occurred while fetching videos from cloudfront!");
            console.log(error);
        }
    };

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