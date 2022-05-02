import {VIDEOS_ACTION_TYPE} from "./video.types";

export const VIDEOS_INITIAL_STATE = {
    videos: [],
    isLoading: false,
    error: null,
};

export const videosReducer = (state = VIDEOS_INITIAL_STATE, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case VIDEOS_ACTION_TYPE.FETCH_VIDEOS_START:
            return {...state, isLoading: true};
        case VIDEOS_ACTION_TYPE.FETCH_VIDEOS_SUCCESS:
            return {...state, videos: payload, isLoading: false};
        case VIDEOS_ACTION_TYPE.FETCH_VIDEOS_FAILED:
            return {...state, error: payload, isLoading: false};
        default:
            return state;
    }
};