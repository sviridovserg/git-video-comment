import { EXTRACT_VIDEO_ID } from '../actions'

const initialState = { videoId: '' } ;
export default (state = initialState, action) => {
    switch (action.type) {
        case EXTRACT_VIDEO_ID:
            return { ...state, ...{ videoId: '' } };
        default: return state;
    }
};