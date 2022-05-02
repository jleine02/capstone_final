import React from "react";

import {NavLink} from "react-router-dom";
import {SidebarWrapper} from "./side-bar.styles";

const SideBar = () => {
    // const dispatch = useDispatch();
    //
    // const { sidebar: open } = useSelector((state) => state.sidebar);
    //


    let sideBarStatus = false;

    const handleCloseSidebar = () => {
        sideBarStatus = !sideBarStatus;
    };

    return (
        <SidebarWrapper open={sideBarStatus}>
            <NavLink
                onClick={handleCloseSidebar}
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