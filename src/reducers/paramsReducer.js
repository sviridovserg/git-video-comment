import { CHANGE_URL, CHANGE_ALT_TEXT, CHANGE_VIDEO_TITLE, CHANGE_ARE_PARAMS_VALID } from '../actions/index'

const initialState = {
    url: '',
    altText: '',
    videoTitle: '',
    isValid: true
};

const paramsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_URL:
            return { ...state, ...{ url: action.url }};
        case CHANGE_ALT_TEXT:
            return { ...state, ...{ altText: action.text }};
        case CHANGE_VIDEO_TITLE:
            return { ...state, ...{ videoTitle: action.title } };
        case CHANGE_ARE_PARAMS_VALID:
            return { ...state, ...{ isValid: action.areParamsValid }}
        default:
            return state;
    }
};

export default paramsReducer;