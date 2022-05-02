import {NavLink} from 'react-router-dom';

import {signOutUser} from "../../utils/firebase/firebase.utils";

import {
    NavigationContainer,
} from './nav-bar.styles';
import {Fragment} from "react";


const NavBar = () => {
    return (
        <NavigationContainer>
            <NavLink to='/videos'><b>VIDEOS</b></NavLink>
            <NavLink to='/upload'><b>UPLOAD</b></NavLink>
            <NavLink to='/login' onClick={signOutUser}>
                <b>SIGN OUT</b>
            </NavLink>
        </NavigationContainer>
    );
};

export default NavBar;