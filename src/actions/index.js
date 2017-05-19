export const CHANGE_URL = 'CHANGE_URL';
export const CHANGE_ALT_TEXT = 'CHANGE_ALT_TEXT';
export const CHANGE_VIDEO_TITLE = 'CHANGE_VIDEO_TITLE';
export const CHANGE_ARE_PARAMS_VALID = 'CHANGE_ARE_PARAMS_VALID';
export const EXTRACT_VIDEO_ID = 'EXTRACT_VIDEO_ID';

export const changeURL = (url) => {
    return {
        type: CHANGE_URL,
        url: url
    };
};

export const changeAltText = (text) => {
    return {
        type: CHANGE_ALT_TEXT,
        text: text
    };
};

export const changeVideoTitle = (title) => {
    return {
        type: CHANGE_VIDEO_TITLE,
        title: title
    };
}

export const changeAreParamsValid = (areParamsValid) => {
    return {
        type: CHANGE_ARE_PARAMS_VALID,
        areParamsValid: areParamsValid
    };
}

export const extractVideoId = () => {
    return {
        type: EXTRACT_VIDEO_ID
    };
}