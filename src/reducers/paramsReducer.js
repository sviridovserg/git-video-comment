import { CHANGE_LINK, CHANGE_ALT_TEXT, CHANGE_VIDEO_TITLE } from '../actions/index'

const initialState = {
    link: '',
    altText: '',
    videoTitle: ''
};

const paramsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LINK:
            return { ...state, ...{ link: action.link }};
        case CHANGE_ALT_TEXT:
            return { ...state, ...{ altText: action.text }};
        case CHANGE_VIDEO_TITLE:
            return { ...state, ...{ videoTitle: action.title } };
        default:
            return state;
    }
};

export default paramsReducer;