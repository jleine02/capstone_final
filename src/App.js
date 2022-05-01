import React from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

import {ThemeProvider} from "styled-components";
import {darkTheme} from "./theme";

import GlobalStyle from "./styles/GlobalStyle";
import Container from "./styles/container";
import Sidebar from "./components/side-bar/side-bar.component";
import Authentication from "./routes/authentication/authentication.component";


const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle/>
            <Navigation/>
            <Sidebar />
            <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="login" element={<Authentication/>}/>
                </Routes>
            </Container>
        </ThemeProvider>
    );
};

export default App;
