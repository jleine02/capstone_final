import {createAction} from "../../utils/reducer/reducer.utils";
import {VIDEOS_ACTION_TYPE} from "./video.types";
import {getVideos} from "../../utils/aws/aws.utils";

export const fetchVideosStart = () =>
    createAction(VIDEOS_ACTION_TYPE.FETCH_VIDEOS_START);

export const fetchVideosSuccess = (videosArray) =>
    createAction(
        VIDEOS_ACTION_TYPE.FETCH_VIDEOS_SUCCESS,
        videosArray
    );

export const fetchVideosFailure = (error) =>
    createAction(
        VIDEOS_ACTION_TYPE.FETCH_VIDEOS_FAILED,
        error
    );

export const fetchVideosAsync = () => async (dispatch) => {
    dispatch(fetchVideosStart());
    try {
        const videosArray = await getVideos();
        dispatch(fetchVideosSuccess(videosArray));
    } catch (error) {
        dispatch(fetchVideosFailure(error));
    }
}