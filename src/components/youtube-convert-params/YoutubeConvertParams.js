import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

import { changeAltText, changeVideoTitle, changeURL, changeAreParamsValid } from '../../actions';

import YoutubeUrlInput from '../youtube-url-input/YoutubeUrlInput';
import './YoutubeConvertParams.css';

const YoutubeConvertParams = (props) => {
    return (
        <div>
            <div className="app-row">
                <YoutubeUrlInput placeholder="Youtube Video Link"
                    url={props.url}
                    isValid={props.isUrlValid}
                    onUrlChanged={props.onUrlChanged}
                    onIsValidChanged={props.onIsValidChanged}/>
            </div>
            <div className="app-row row">
                <div className="col-xs-6">
                    <FormControl type="text" placeholder="Image Title" value={props.videoTitle} onChange={props.onVideoTitleChanged}/>
                </div>
                <div className="col-xs-6">
                    <FormControl type="text" placeholder="Image Alt" value={props.altText} onChange={props.onAltTextChanged}/>
                </div>
            </div>
        </div>
    );
};

YoutubeConvertParams.propTypes = {
    url: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    videoTitle: PropTypes.string.isRequired,
    isUrlValid: PropTypes.bool.isRequired,
    onVideoTitleChanged: PropTypes.func.isRequired,
    onAltTextChanged: PropTypes.func.isRequired,
    onUrlChanged: PropTypes.func.isRequired,
    onIsValidChanged: PropTypes.func.isRequired
};


const mapStateToProps = ({params}) => {
    return {
        altText: params.altText,
        videoTitle: params.videoTitle,
        url: params.url,
        isUrlValid: params.isValid
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onVideoTitleChanged: (e) => dispatch(changeVideoTitle(e.target.value)),
        onAltTextChanged:  (e) => dispatch(changeAltText(e.target.value)),
        onUrlChanged: (url) => dispatch(changeURL(url)),
        onIsValidChanged: (isValid) => dispatch(changeAreParamsValid(isValid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeConvertParams);