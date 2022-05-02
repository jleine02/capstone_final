import React from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {signOutUser} from "../../utils/firebase/firebase.utils";

import {NavBarIcon} from "../icons/icons.component";

import {
    Wrapper,
} from './nav-bar.styles';
import {selectIsSideBarOpen} from "../../store/side-bar/side-bar.selector";
import {setIsSideBarOpen} from "../../store/side-bar/side-bar.action";
import SideBar from "../side-bar/side-bar.component";

const NavBar = () => {
    const dispatch = useDispatch();
    const isSideBarOpen = useSelector(selectIsSideBarOpen);

    const handleToggleSidebar = () => {
        dispatch(setIsSideBarOpen(!isSideBarOpen));
    };

    return (
        <Wrapper>
            <div className="logo flex-row">
                <NavBarIcon
                    className="toggle-navhandler"
                    onClick={handleToggleSidebar}
                />
            </div>
            {isSideBarOpen && <SideBar />}
            <NavLink to='/videos'><b>VIDEOS</b></NavLink>
            <NavLink to='/upload'><b>UPLOAD</b></NavLink>
            <NavLink to='/login' onClick={signOutUser}>
                <b>SIGN OUT</b>
            </NavLink>
        </Wrapper>
    );
};

export default NavBar;