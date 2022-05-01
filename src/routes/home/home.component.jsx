import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import VideoGrid from "../../styles/video-grid";

import {HomeContainer} from "./home.styles";

import {localVideos} from "../../localVideos";

const Home = () => {
    const {videos} = localVideos;
    console.log(videos);

    // useEffect(() => {
    //     // dispatch(getVideos()); // this will fetch from s3
    // }, [dispatch]);


    return (
        <HomeContainer>
            <h1>THIS WILL BE HOME</h1>
        </HomeContainer>
    );
};

export default Home;