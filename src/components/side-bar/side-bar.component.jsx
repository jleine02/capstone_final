import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import {SidebarWrapper} from "./side-bar.styles";
import {selectIsSideBarOpen} from "../../store/side-bar/side-bar.selector";
import {setIsSideBarOpen} from "../../store/side-bar/side-bar.action";

const SideBar = () => {
    const dispatch = useDispatch();
    const isSideBarOpen = useSelector(selectIsSideBarOpen);

    const handleToggleSidebar = () => {
        dispatch(setIsSideBarOpen(!isSideBarOpen));
    };

    return (
        <SidebarWrapper open={isSideBarOpen}>
            <NavLink
                onClick={handleToggleSidebar}
                exact
                to="/"
                className="active"
            >
                <span>Home</span>
            </NavLink>
        </SidebarWrapper>
    );
};

export default SideBar;