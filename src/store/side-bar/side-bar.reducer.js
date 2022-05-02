import {SIDEBAR_ACTION_TYPES} from "./side-bar.types";

const SIDEBAR_INITIAL_STATE = {
    isSideBarOpen: false,
}

export const sideBarReducer = (state= SIDEBAR_INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case SIDEBAR_ACTION_TYPES.SET_IS_SIDEBAR_OPEN:
            return {...state, isSideBarOpen: payload}
        default:
            return state;
    }
};