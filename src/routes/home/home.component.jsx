import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import VideoGrid from "../../styles/video-grid";




import {HomeContainer} from "./home.styles";

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        console.log(videos);
        loadVideos();
        console.log(videos);
    }, []);

    const loadVideos = async () => {
        console.log("attempting to retrieve videos from cloudfront");
        const cloudFrontUrl = "/";

        try {
            const request = {
                method: "GET"
                }


            const response = await fetch(cloudFrontUrl, request);
            console.log("response:", response);
            const jsonResponse = await response.json();
            console.log("jsonResponse:", jsonResponse);

            setVideos(jsonResponse.videos);
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <HomeContainer>
            <h1>THIS WILL BE HOME</h1>
        </HomeContainer>
    );
};

export default Home;