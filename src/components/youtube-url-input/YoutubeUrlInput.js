import React, { Component } from 'react';
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import './YoutubeUrlInput.css'

class YoutubeUrlInput extends Component {
    constructor(props) {
        super(props);
        this.urlChanged = this.urlChanged.bind(this);
        this.state = {
            url: props.value,
            validationState: null
        }
    }
    urlChanged(e) {
        let url = e.target.value;
        if (url && !this.validateUrl(url)) {
            this.setState({
                validationState: 'error',
                url: url
            });
            return;
        }
        this.setState({
            validationState: null,
            url: url
        });
        this.onUrlChanged(url);
        //'https://www.youtube.com/embed/' + match[2] + '?autoplay=1&enablejsapi=1'
    }
    validateUrl(url) {
        if (url !== undefined || url !== '') {
            let videoId = this.getVideoId(url)
            if (videoId && videoId.length == 11) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
    getVideoId(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        return match && match[2];
    }
    render() {
        return (
            <FormGroup className="url-input" validationState={this.state.validationState}>
                <FormControl type="text" placeholder={this.props.placeholder} value={this.state.url} onChange={this.urlChanged} />
                <HelpBlock>Youtube url is invalid.</HelpBlock>
            </FormGroup>
        );
    }
}

export default YoutubeUrlInput;