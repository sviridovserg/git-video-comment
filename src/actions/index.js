export const CHANGE_LINK = 'CHANGE_LINK';
export const CHANGE_ALT_TEXT = 'CHANGE_ALT_TEXT';
export const CHANGE_VIDEO_TITLE = 'CHANGE_VIDEO_TITLE';

export const changeLink = (link) => {
    return {
        type: CHANGE_LINK,
        link: link
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