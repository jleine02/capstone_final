import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Videos from "./routes/videos/videos.component";
import Upload from "./routes/upload/upload.component";
import Video from "./routes/video/video.component";

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

Amplify.configure(awsconfig);
Amplify.configure(awsExports);

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='videos/*' element={<Videos/>}/>
                <Route path='video' element={<Video/>}/>
                <Route path='upload' element={<Upload/>}/>
            </Route>
        </Routes>
    );
};

export default App;
