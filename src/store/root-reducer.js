import {combineReducers} from 'redux';

import {userReducer} from "./user/user.reducer";
import {sideBarReducer} from "./side-bar/side-bar.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    sideBar: sideBarReducer,
});