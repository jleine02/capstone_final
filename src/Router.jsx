import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

// components
import NavBar from "./components/nav-bar/nav-bar.component";
import SideBar from "./components/side-bar/side-bar.component";

// styles
import Container from "./styles/container";

// routes
import Home from "./routes/home/home.component";
import Upload from "./routes/upload/upload.component";

const AppRouter = () => (
    <Router>
        <NavBar />
        <SideBar />
        <Container>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/upload" element={<Upload/>} />
            </Routes>
        </Container>
    </Router>
);

export default AppRouter;