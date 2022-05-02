import {createSelector} from "reselect";

const selectVideoReducer = (state) => state.videos;

export const selectVideos = createSelector(
    [selectVideoReducer],
    (videosSlice) => videosSlice.videos
);

export const selectVideosMap = createSelector(
    [selectVideos],
    (videos) =>
        videos.reduce((acc, video) => {
            const {title, items} = video;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
);

export const selectVideosAreLoading = createSelector(
    [selectVideoReducer],
    (videosSlice) => videosSlice.isLoading
);