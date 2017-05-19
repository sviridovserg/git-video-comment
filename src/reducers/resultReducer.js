import { EXTRACT_VIDEO_ID } from '../actions';
import { getVideoId } from '../utils/YoutubeUrl';

const initialState = { videoId: '' };
export default (state = initialState, action) => {
    switch (action.type) {
        case EXTRACT_VIDEO_ID:
            return { ...state, ...{ videoId: getVideoId(action.url) } };
        default: return state;
    }
};