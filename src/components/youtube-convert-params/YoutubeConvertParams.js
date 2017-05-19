import React from 'react'
import { connect } from 'react-redux'
import { FormControl } from 'react-bootstrap';

import { changeAltText, changeVideoTitle, changeURL, changeAreParamsValid } from '../../actions'

import YoutubeUrlInput from '../youtube-url-input/YoutubeUrlInput'
import './YoutubeConvertParams.css'

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
                    <FormControl type="text" placeholder="Image Title" value={props.altText} onChange={props.onAltTextChanged}/>
                </div>
            </div>
        </div>
    );
};


const mapStateToPros = ({params}) => {
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

export default connect(mapStateToPros, mapDispatchToProps)(YoutubeConvertParams);