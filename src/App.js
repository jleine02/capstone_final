import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ThemeProvider} from "styled-components";
import {darkTheme} from "./theme";
import GlobalStyle from "./styles/global-style";

import Router from "./Router";
import Authentication from "./routes/authentication/authentication.component";

import {setCurrentUser} from "./store/user/user.action";
import {selectCurrentUser} from "./store/user/user.selector";

import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";


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
