import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

// components
import NavBar from "./components/nav-bar/nav-bar.component";
import SideBar from "./components/side-bar/side-bar.component";

// styles
import Container from "./styles/container";

// routes
import Home from "./routes/home/home.component";


const AppRouter = () => (
    <Router>
        <NavBar />
        <SideBar />
        <Container>
            <Routes>
                <Route path="/" component={Home} />
            </Routes>
        </Container>
    </Router>
);

export default AppRouter;