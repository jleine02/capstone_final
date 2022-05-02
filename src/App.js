import React, {useEffect} from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';

import Home from "./routes/home/home.component";

import {ThemeProvider} from "styled-components";
import {darkTheme} from "./theme";

import GlobalStyle from "./styles/GlobalStyle";
import Router from "./Router";
import Authentication from "./routes/authentication/authentication.component";

import {setCurrentUser} from "./store/user/user.action";
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import {selectCurrentUser} from "./store/user/user.selector";


const App = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    console.log("currentUser: ", currentUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });

        return unsubscribe;
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle/>
            {currentUser ? <Router /> : <Authentication/>}
        </ThemeProvider>
    );
};

export default App;
