import {createSelector} from "reselect";

const selectSideBarReducer = (state) => state.sideBar;

export const selectIsSideBarOpen = createSelector(
    [selectSideBarReducer],
    (sideBar) => sideBar.isSideBarOpen
);