
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

const getVideoId = (url) => {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return match && match[2];
}

export {
    isYoutubeUrlValid,
    getVideoId
}