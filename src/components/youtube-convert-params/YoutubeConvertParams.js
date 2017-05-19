import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormControl } from 'react-bootstrap';

import { changeAltText, changeVideoTitle, changeURL, changeAreParamsValid } from '../../actions'

import YoutubeUrlInput from '../youtube-url-input/YoutubeUrlInput'
import './YoutubeConvertParams.css'

class YoutubeConvertParams extends Component {
    constructor(props) {
        super(props);
        this.titleChanged = this.titleChanged.bind(this);
        this.altTextChanged = this.altTextChanged.bind(this);
    }
    titleChanged(e) {
        this.props.onTitleChanged && this.props.onTitleChanged(e.target.value);
    }
    altTextChanged(e) {
        this.props.onAltTextChanged && this.props.onAltTextChanged(e.target.value);
    }
    render() {
        return (
            <div>
                <div className="app-row">
                    <YoutubeUrlInput placeholder="Youtube Video Link"
                        url={this.props.url}
                        isValid={this.props.isUrlValid}
                        onUrlChanged={this.props.onYoutubeUrlChanged}
                        onIsValidChanged={this.props.onYoutubeUrlIsValidChanged}/>
                </div>
                <div className="app-row row">
                    <div className="col-xs-6">
                        <FormControl type="text" placeholder="Image Title" value={this.props.videoTitle} onChange={this.props.onVideoTitleChanged}/>
                    </div>
                    <div className="col-xs-6">
                        <FormControl type="text" placeholder="Image Title" value={this.props.altText} onChange={this.props.onAltTextChanged}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToPros = ({params}) => {
    return {
        altText: params.altText,
        videoTitle: params.videoTitle,
        url: params.link,
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