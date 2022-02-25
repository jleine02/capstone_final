import {Outlet} from 'react-router-dom';

import VideoDirectory from '../../components/video-directory/video-directory.component';

const Home = () => {
    return (
        <div>
            <VideoDirectory/>
            <Outlet/>
        </div>
    );
};

export default Home;