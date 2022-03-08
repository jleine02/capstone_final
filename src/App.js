import {Routes, Route} from 'react-router-dom';

// import Authentication from './routes/authentication/authentication.component';
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Videos from "./routes/videos/videos.component";
import Upload from "./routes/upload/upload.component";
import Video from "./routes/video/video.component";

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='videos/*' element={<Videos/>}/>
            <Route path='video' element={<Video/>}/>
            <Route path='upload' element={<Upload/>}/>
        </Route>
    </Routes>
  );
};

export default App;
