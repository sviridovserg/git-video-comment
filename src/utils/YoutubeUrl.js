

const getVideoId = (url) => {
    /*eslint no-useless-escape: 0*/
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return match && match[2];
}

const isYoutubeUrlValid = (url) => {
    if (url !== undefined || url !== '') {
        let videoId = getVideoId(url)
        if (videoId && videoId.length === 11) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}

export {
    isYoutubeUrlValid,
    getVideoId
}