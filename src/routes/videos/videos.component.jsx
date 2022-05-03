import {AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

// Import any actions required for transformations.
import {fill} from "@cloudinary/url-gen/actions/resize";
import VideoGrid from "../../styles/video-grid";
import Container from "../../styles/container";
import {HomeContainer} from "../home/home.styles";

const Videos = () => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dlpvg1cvn'
        }
    });


    return (
        <HomeContainer>
            <VideoGrid>
                {/*myVideos.map((video) => (*/}
                {/*        <AdvancedVideo cldVid={video} controls/>*/}
                {/*))}*/}
            </VideoGrid>
        </HomeContainer>
    );
};

export default Videos;

