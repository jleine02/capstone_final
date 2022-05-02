import {createAction} from "../../utils/reducer/reducer.utils";
import {SIDEBAR_ACTION_TYPES} from "./side-bar.types";

export const setIsSideBarOpen = (boolean) =>
    createAction(SIDEBAR_ACTION_TYPES.SET_IS_SIDEBAR_OPEN, boolean);