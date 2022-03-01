import {Route, Routes} from "react-router-dom";
import VideosPreview from "../videos-preview/videos-preview.component";
import Video from "../video/video.component";

const Videos = () => {
    return (
        <Routes>
            <Route index element={<VideosPreview/>}/>
            <Route path=':video' element={<Video/>}/>
        </Routes>
    );
};

export default Videos;

