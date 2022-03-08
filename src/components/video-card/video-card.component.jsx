import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import {ReactComponent as VideoIcon} from "../../assets/video.svg";

import {
    VideoCardContainer,
    Footer,
    ID,
    CreatedDate,
} from './video-card.styles';

const VideoCard = ({video}) => {
    const {id, createdDate} = video;
    console.log("hit");
    // console.log(id, createdDate);

    return (
        <VideoCardContainer>
            <VideoIcon/>
            <Footer>
                <ID>{id}</ID>
                <CreatedDate>{createdDate}</CreatedDate>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
                View Video
            </Button>
        </VideoCardContainer>
    );
};

export default VideoCard;