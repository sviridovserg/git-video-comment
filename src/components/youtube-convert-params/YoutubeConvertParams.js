import React, { Component } from 'react'
import YoutubeUrlInput from '../youtube-url-input/YoutubeUrlInput'
import { FormControl } from 'react-bootstrap';
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
                        <FormControl type="text" placeholder="Image Title" value={this.props.title} onChange={this.titleChanged} />
                    </div>
                    <div className="col-xs-6">
                        <FormControl type="text" placeholder="Alt Text" value={this.props.altText} onChange={this.altTextChanged} />
                    </div>
                </div>
            </div>
        );
    }
}

export default YoutubeConvertParams;